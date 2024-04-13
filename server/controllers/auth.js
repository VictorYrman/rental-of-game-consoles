import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register
export const register = async (request, response) => {
  try {
    const { email, password, role } = request.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return (
        response
          //.status()
          .json({
            message: "Пользователь с таким email уже существует",
          })
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      password: hashPassword,
      role,
    });

    await newUser.save();

    response.json({ newUser, message: "Регистрация прошла успешно" });
  } catch (error) {
    response.json({ message: "Ошибка при регистрации" });
  }
};

//Login
export const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      return response.json({ message: "Такого пользователя не существует" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return response.json({ message: "Вы неправильно ввели пароль" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );

    response.json({ token, user, message: "Вы вошли в систему" });
  } catch (error) {
    response.json({ message: "Ошибка при входе в аккаунт" });
  }
};

//Get me
export const getMe = async (request, response) => {
  try {
    const user = await User.findById(request.userId);

    if (!user) {
      return response.json({ message: "Такого пользователя не существует" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );

    response.json({ user, token });
  } catch (error) {
    response.json({ message: "Нет доступа" });
  }
};
