import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 25,
    margin: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
})
