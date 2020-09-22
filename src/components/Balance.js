import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"
import Graph from './Graph.js';


const Balance = () => {
    const {transactions} = useContext (GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = [amounts.reduce((acc, item) => (acc += item), 0).toFixed(0)];

    return (

        <div className="upHead">
            <h4 className="withChart">Celkem</h4>
            <h1 >{total} Kč</h1>
            <Graph/>
        </div>
    )
}

export default Balance
