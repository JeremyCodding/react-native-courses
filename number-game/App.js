import { StyleSheet, ImageBackground, SafeAreaView, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { useFonts } from 'expo-font'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import Colors from './constants/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(false)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  if (!fontsLoaded) {
    return (
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <Text>Loading App</Text>
      </LinearGradient>
    )
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
