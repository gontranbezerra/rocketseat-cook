import { FlatList, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Recipe } from '@/components/recipe';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { Ingredients } from '@/components/ingredients';

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  const params = useLocalSearchParams<{ selected: string }>();
  const ingredientIds = params.selected.split(',');

  useEffect(() => {
    services.ingredients.findByIds(ingredientIds).then(setIngredients);
  }, []);
  
  useEffect(() => {
    services.ingredients.findByIds(ingredientIds).then(setIngredients);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} onPress={() => router.back()} />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <Ingredients igredients={ingredients} />

      <FlatList
        data={['1']}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: 'Omelete',
              image:
                'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%E2%95%A0%C3%BCgano-e-tomate.jpg',
              minutes: 10,
            }}
          />
        )}
      />
    </View>
  );
}
