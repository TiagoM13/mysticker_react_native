import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    textTransform: 'uppercase',
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginTop: 7,
    fontSize: 14
  }
});