import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    maxHeight: 56,
    margin: 24,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase'
  }
});