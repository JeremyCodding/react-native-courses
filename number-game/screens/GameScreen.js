import { View, StyleSheet, Alert, Text, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import PrimaryText from '../components/ui/PrimaryText'
import GuessLogItem from '../components/game/GuessLogItem'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHndler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong!', [
        { text: 'Sorry', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
    setGuessRounds((prev) => [newRndNumber, ...prev])
  }

  const guessRoundListLegth = guessRounds.length

  return (
    <View style={styles.screen}>
      <Title>Oppnent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <PrimaryText style={styles.primaryTextStyle}>
          Higher or Lower?
        </PrimaryText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHndler('higher')}>
              <Ionicons name="add" size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHndler('lower')}>
              <Ionicons name="remove" size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/*{guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))}*/}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLegth - itemData.index}
              guess={itemData.item}
            />
          )}
          keyStractor={(item) => item}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  primaryTextStyle: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})
