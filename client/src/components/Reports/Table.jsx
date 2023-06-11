import React from 'react'

const Table = (props) => {

    console.log(props.expenses)
  return (
    <div className='overflow-x-auto'>

   
    <table>
       <thead>
    <tr>
      <th>Title</th>
      <th>Amount</th>
      <th>Category</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {props.expenses && props.expenses.map((expense,index)=>{
        return (
    <tr key={index}>
      <td>{expense.title}</td>
      <td>${expense.amount}</td>
      <td>{expense.category}</td>
      <td>{expense.date.slice(0,10)}</td>
    </tr> 
        )
    })}
    

   
  </tbody>
</table>
</div>
  )
}

export default Table