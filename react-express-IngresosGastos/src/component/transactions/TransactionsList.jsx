import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionsItem";


function TransactionList() {
    const {transactions} = useGlobalState();
    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold block w-full">History</h3>
            <ul className="w-full">
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    ) 
}

export default TransactionList;