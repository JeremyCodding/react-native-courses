import { StyleSheet, View, Text } from "react-native";

import ExpenesesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  return (
    <View style={styles.container}>
      <ExpenesesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.infoText}>{fallbackText}</Text>
      )}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
