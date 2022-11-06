import { FlatList, View, Text } from 'react-native';
import { IPositionChoice } from '../../interfaces';

import { POSITIONS } from '../../utils/positions';

import { Position } from '../Position';

import { styles } from './styles';

export function PositionChoice({ onChangePosition, positionSelected }: IPositionChoice) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha a posição
      </Text>
      <FlatList
        data={POSITIONS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Position
            title={item.title}
            onPress={() => onChangePosition(item)}
            isSelected={item.title === positionSelected.title}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}