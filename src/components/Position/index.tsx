import { TouchableOpacity, Text } from 'react-native';
import { IPosition } from '../../interfaces';
import { COLORS } from '../../theme/colors';

import { styles } from './styles';

export function Position({ title, isSelected, ...rest }: IPosition) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? { backgroundColor: COLORS.GREEN } : { backgroundColor: COLORS.WHITE }
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.title,
          isSelected ? { color: COLORS.WHITE } : { color: COLORS.BLACK }
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

