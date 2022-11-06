import { Text, View } from 'react-native';

import { FootballField } from '../FootballField';

import Star from '../../assets/star.svg';
import Flag from '../../assets/bandeira.svg';

import { IHeader } from '../../interfaces';

import { styles } from './styles';

export function Header({ position }: IHeader) {
  return (
    <View style={styles.container}>
      <FootballField data={position} />

      <View style={styles.right}>
        <Text style={styles.title}>
          Títulos
        </Text>
        <View style={styles.stars}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>

        <Text style={styles.title}>
          Bandeira
        </Text>

        <Flag style={styles.flag} />
      </View>
    </View>
  );
}