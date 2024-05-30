import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: Colors.accent500,
    fontSize: deviceWidth < 300 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
})
