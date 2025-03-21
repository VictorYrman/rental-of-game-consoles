import Category from "../models/Category.js";

export const getCategories = async (request, response) => {
  try {
    const categories = await Category.find();

    response.json(categories);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const createCategory = async (request, response) => {
  try {
    const { name } = request.body;
    const category = await Category.findOne({ name });
    if (category)
      return response
        .status(400)
        .json({ message: "Эта категория уже существует." });

    const newCategory = new Category({ name });

    await newCategory.save();
    response.json({ message: "Категория создана" });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (request, response) => {
  try {
    await Category.findByIdAndDelete(request.params.id);

    response.json({ message: "Категория удалена." });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (request, response) => {
  try {
    const { name } = request.body;

    await Category.findOneAndUpdate({ _id: request.params.id }, { name });

    response.json({ message: "Категория обновлена." });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
