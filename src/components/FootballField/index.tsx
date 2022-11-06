import { View, Text } from 'react-native';
import { IFootbalField } from '../../interfaces';

import { styles } from './styles';

export function FootballField({ data }: IFootbalField) {

  return (
    <View style={styles.container}>
      <data.Icon />

      <Text style={styles.title}>
        {data.title}
      </Text>
    </View>
  );
}