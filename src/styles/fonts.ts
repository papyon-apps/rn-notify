import { StyleSheet } from 'react-native';

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 28,
  h5: 24,
  normal: 20,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
};

const style = StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  normal: {
    fontSize: size.regular,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default {
  size,
  style,
};
