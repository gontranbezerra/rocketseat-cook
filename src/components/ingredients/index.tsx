import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '../ingredient';
import { services } from '@/services';

type IngredientsProps = {
  selected?: string[];
  setSelected?: React.Dispatch<React.SetStateAction<string[]>>;
  igredients: IngredientResponse[];
};

export function Ingredients({ selected, setSelected, igredients }: Readonly<IngredientsProps>) {
  function handleToggleSelected(value: string) {
    if (selected?.includes(value) && setSelected) {
      return setSelected((state: any[]) => state.filter((item) => item !== value));
    }

    setSelected && setSelected((state: string[]) => [...state, value]);
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* {Array.from({ length: 100 }).map((item, index) => ( */}
      {igredients.map((item) => (
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
