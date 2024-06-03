import { StyleSheet, View } from "react-native";

import ExpenesesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 89.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e3",
    description: "Spider man 2 video game",
    amount: 49.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e4",
    description: "A shirt",
    amount: 55.9,
    date: new Date("2022-01-19"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
];

function ExpensesOutput({ expenses = DUMMY_EXPENSES, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpenesesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
