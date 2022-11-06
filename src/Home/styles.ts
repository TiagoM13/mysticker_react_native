import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
    paddingTop: 24
  },
  scroll: {
    paddingBottom: 150
  },
  picture: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    margin: 24,
    padding: 5
  },
  camera: {
    width: Dimensions.get("screen").width - 58,
    height: 300
  },
  player: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000',
    textTransform: 'uppercase'
  },
  sticker: {
    backgroundColor: COLORS.BLUE
  },
  retry: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  containerButton: {
    flex: 1,
    height: 56,
    maxHeight: 56,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    margin: 24,
    marginTop: 16,
    marginBottom: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});