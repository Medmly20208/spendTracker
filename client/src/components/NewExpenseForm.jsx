import React,{useState} from 'react'

import {useAddExpenseMutation} from "../api/apiSlice"

//utils
import {getCurrentDate} from "../utils"

const NewExpenseForm = () => {
  
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState("Food")
    const [date,setDate] = useState(getCurrentDate())

    const [addExpense,{data,isSuccess,isError,error}] = useAddExpenseMutation()

    const newExpenseHandler=()=>{
      addExpense({userId:localStorage.getItem("id"),title,category,amount,date})
      
    }
    console.log(date)
    console.log(data)
    return (
    <div className='p-[20px] bg-white'>
        <form>
            <div>
                <label>Title:</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Food">Food</option>
                    <option value="Shelter">Shelter</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Other">Other</option>
                </select>
                
            </div>
            <div>
                <div>
                <label>Amount:</label>
            <input type="number" onChange={(e)=>setAmount(e.target.value)}/>
                </div>
           
            </div>
          
            <div>
                <label>Date:</label>
                <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            </div>

        </form>
        <a className='mainBtn' onClick={newExpenseHandler}>Add expense</a>
    </div>
  )
}

export default NewExpenseForm