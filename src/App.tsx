import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
// import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 1, description: "bbb", amount: 10, category: "utilities" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 10, category: "utilities" },
  ]);
  return (
    <div>
      {/* <Form></Form> */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
