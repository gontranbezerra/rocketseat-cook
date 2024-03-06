import { FlatList, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Recipe } from '@/components/recipe';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { Ingredients } from '@/components/ingredients';

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

  const params = useLocalSearchParams<{ selected: string }>();
  const ingredientIds = params.selected.split(',');

  useEffect(() => {
    services.ingredients.findByIds(ingredientIds).then(setIngredients);
  }, []);

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientIds)
      .then((response) => setRecipes(response))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} onPress={() => router.back()} />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <View style={styles.ingredients}>
        <Ingredients ingredients={ingredients} />
      </View>
      
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Recipe
            // recipe={{
            //   name: item.name,
            //   image: item.image,
            //   minutes: item.minutes,
            // }}
            recipe={item}
            onPress={() => router.navigate('/recipe/' + item.id)}
          />
        )}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
        ListEmptyComponent={() => <Text style={styles.empty}>Nenhuma receita encontrada. Escolha outros ingredientes.</Text>}
      />
    </View>
  );
}
