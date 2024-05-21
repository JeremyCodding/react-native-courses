import { View, StyleSheet } from 'react-native'

import Colors from '../../constants/colors'

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
})
