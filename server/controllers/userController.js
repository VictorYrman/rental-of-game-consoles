import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (request, response) => {
  try {
    const { userName, email, password } = request.body;

    const isNameBusy = await User.findOne({ userName });
    const isEmailBusy = await User.findOne({ email });

    if (isNameBusy || isEmailBusy) {
      return response
        .status(400)
        .json({ message: "Пользователь с такими данными уже существует." });
    }

    if (password.length < 6) {
      return response
        .status(400)
        .json({ message: "Пароль должен быть не менее 6 символов." });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();

    const accessToken = createAccessToken({ id: newUser._id });
    const refreshToken = createRefreshToken({ id: newUser._id });

    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });

    response.json({ accessToken });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const refreshToken = (request, response) => {
  try {
    const rf_token = request.cookies.refreshToken;

    if (!rf_token) {
      return response.status(400).json({
        message: "Пожалуйста войдите в аккаунт или зарегистрируйтесь.",
      });
    }

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_KEY, (error, user) => {
      if (error) {
        return response.status(400).json({
          message: "Пожалуйста войдите в аккаунт или зарегистрируйтесь.",
        });
      }

      const accessToken = createAccessToken({ id: user.id });

      response.json({ accessToken });
    });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      return response
        .status(400)
        .json({ message: "Пользователь не существует." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response.status(400).json({ message: "Неправильный пароль." });
    }

    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });

    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });

    response.json({ accessToken });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const logout = async (request, response) => {
  try {
    response.clearCookie("refreshToken", { path: "/user/refresh_token" });
    return response.json({ message: "Вы вышли из аккаунта." });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const user = await User.findById(request.user.id).select("-password");
    if (!user) {
      return response
        .status(400)
        .json({ message: "Пользователь не существует." });
    }

    response.json(user);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find();

    response.json(users);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.findByIdAndDelete(request.params.id);

    response.json({ message: "Пользователь удалён." });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const updateUser = async (request, response) => {
  try {
    const { userName } = request.body;

    await User.findByIdAndUpdate({ _id: request.params.id }, { userName });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: "1d" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_KEY, { expiresIn: "7d" });
};
