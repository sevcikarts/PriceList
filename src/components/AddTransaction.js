
import React, {useState, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

const AddTransaction = () => {
        const[text,setText] = useState("")
        const[amount,setAmount] = useState(0)

        const {addTransaction} = useContext(GlobalContext)
        

        const onSubmit = e =>{
          e.preventDefault();
          const newTransaction = {
            id: new Date().valueOf(),
            text,
            amount: +amount
            
          }
          console.log(newTransaction)
          addTransaction(newTransaction)
          setText('')
          setAmount('')
        }
        
    return (
        <>
            <h3>Přidat novou položku</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Poznámka</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Napiš poznámku..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Hodnota <br />
            </label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="napiš hodnotu..." />
        </div>
        <button className="btn">Přidat položku</button>
      </form>
        </>
    )
    
}

export default AddTransaction
