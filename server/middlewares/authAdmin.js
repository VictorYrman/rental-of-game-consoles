import User from "../models/User.js";

const authAdmin = async (request, response, next) => {
  try {
    const user = await User.findOne({
      _id: request.user.id,
    });

    if (user.isAdmin === false)
      return response
        .status(400)
        .json({ message: "В доступе к функциям админа отказано." });

    next();
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export default authAdmin;
