import { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles';
import { Ingredients } from '@/components/ingredients';
import { Selected } from '@/components/selected';
import { router } from 'expo-router';

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleclearSelected() {
    Alert.alert('Limpar', 'Deseja limpar tudo?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', style: 'default', onPress: () => setSelected([]) },
    ]);
  }

  function handleSearch() {
    // router.navigate('/recipes/');
    router.navigate({ pathname: '/recipes/', params: { selected: selected } });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu</Text>

      <Ingredients selected={selected} setSelected={setSelected} />

      {selected.length > 0 && <Selected quantity={selected.length} onClear={handleclearSelected} onSearch={handleSearch} />}
    </View>
  );
}
