import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 82,
    height: 36,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14,
    color: COLORS.GREEN
  },
});