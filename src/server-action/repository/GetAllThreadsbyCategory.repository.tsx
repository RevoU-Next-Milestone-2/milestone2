import Threads from "@/models/Threads.model";
import Categories from "@/models/Categories.model";
import { GetAllThreadsbyCategory as inputCategoryId } from "../types/threads.type";

export const GetAllThreadsbyCategory = async ({ category }: inputCategoryId) => {
  try{
    const findCategoryId = await Categories.findOne({
        where: {
          category_name: category,
        },
        attributes: ["category_id"],
      });
      const category_id = findCategoryId?.getDataValue("category_id") as number;
      const getAllbyCategory = await Threads.findAll({
        where: {
          category_id,
        },
      });
      return getAllbyCategory;
  } catch(err){
    console.error("Error get all Thread by category:", err);
    throw err;
  }
};

