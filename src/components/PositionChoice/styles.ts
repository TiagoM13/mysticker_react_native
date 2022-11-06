import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%'
  },
  content: {
    paddingHorizontal: 24
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    color: COLORS.WHITE,
    marginLeft: 24,
    marginBottom: 7
  }
});