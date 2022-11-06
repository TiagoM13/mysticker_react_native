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
    color: COLORS.WHITE,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 22,
    marginBottom: 10
  }
});