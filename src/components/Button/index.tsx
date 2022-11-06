import { TouchableOpacity, Text } from 'react-native';
import { IButton } from '../../interfaces';

import { styles } from './styles';

export function Button({ title, ...rest }: IButton) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}