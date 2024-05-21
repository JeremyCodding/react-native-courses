import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function PrimaryText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default PrimaryText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
})
