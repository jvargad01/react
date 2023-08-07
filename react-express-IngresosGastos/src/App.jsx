import { GlobalProvider } from "./context/GlobalState";
import Header from "./component/Header";
import Balance from "./component/Balance";
import TransactionFrom from "./component/transactions/TransactionFrom";
import TransactionList from "./component/transactions/TransactionsList";
import IncomeExpenses from "./component/IncomeExpenses";
import ExpenseChart from "./component/ExpenseChart";


function App(){
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <dev className="container mx-auto w-3/6">
          <dev className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <Header/>
              <IncomeExpenses/>
              <Balance/>  
              <TransactionFrom/> 
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart/>
              <TransactionList/> 
            </div> 
          </dev>
        </dev>
      </div> 
    </GlobalProvider>
  );
}

export default App;