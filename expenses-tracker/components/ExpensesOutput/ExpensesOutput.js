import { View } from "react-native";

import ExpenesesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutPut({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpenesesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutPut;
