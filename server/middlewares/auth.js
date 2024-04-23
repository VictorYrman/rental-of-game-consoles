import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  try {
    const token = request.header("Authorization");
    if (!token)
      return response
        .status(400)
        .json({ message: "Недействительная авторизация." });

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, user) => {
      if (error)
        return response
          .status(400)
          .json({ message: "Недействительная авторизация." });

      request.user = user;
      next();
    });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export default auth;
