import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '../ingredient';

type IngredientsProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export function Ingredients({ selected, setSelected }: Readonly<IngredientsProps>) {
  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state: any[]) => state.filter((item) => item !== value));
    }

    setSelected((state: string[]) => [...state, value]);
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient
          key={index}
          name="Tomate"
          image=""
          selected={selected.includes(String(index))}
          onPress={() => handleToggleSelected(String(index))}
        />
      ))}
    </ScrollView>
  );
}
