import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '../ingredient';
import { services } from '@/services';

type IngredientsProps = {
  selected?: string[];
  setSelected?: React.Dispatch<React.SetStateAction<string[]>>;
  ingredients: IngredientResponse[];
};

export function Ingredients({ selected, setSelected, ingredients }: Readonly<IngredientsProps>) {
  function handleToggleSelected(value: string) {
    if (selected?.includes(value) && setSelected) {
      return setSelected((state: any[]) => state.filter((item) => item !== value));
    }

    setSelected && setSelected((state: string[]) => [...state, value]);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsVerticalScrollIndicator={false}
    >
      {/* {Array.from({ length: 100 }).map((item, index) => ( */}
      {ingredients.map((item) => (
        <Ingredient
          key={item.id}
          name={item.name}
          image={`${services.storage.imagePath}/${item.image}`}
          selected={selected?.includes(item.id)}
          onPress={() => handleToggleSelected(item.id)}
        />
      ))}
    </ScrollView>
  );
}
