import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flag: {
    marginTop: 12
  },
  right: {
    alignItems: 'flex-end',
  },
  title: {
    textTransform: 'uppercase',
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 14
  },
  stars: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 24
  }
});