import { ScrollView } from 'react-native';
import { styles } from './styles';

export function Ingredients() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredients key={index} />
      ))}
    </ScrollView>
  );
}
