import * as recipes from "./recipesService"
import * as ingredients from "./ingredientsService"
import * as preparations from "./preparationsService"

export const services = {
  recipes,
  ingredients,
  preparations,
  storage: {
    imagePath: 'https://eszpywgljtjowyobftru.supabase.co/storage/v1/object/public/ingredients',
  },
};
