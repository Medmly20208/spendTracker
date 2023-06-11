const expenseModel = require("../models/expense.model")
const catchAsync = require("../utils/catchAsync")

//create expenses 
exports.CreateExpense = catchAsync(async (req, res) => {
    
    const expense = await expenseModel.create({ ...req.body });
  
    res.status(200).json({
      status: "success",
      data: expense,
    });
  });

//getExpensesBy req.body
exports.getExpenses = catchAsync(async (req, res) => {
    
   let querObj

   

   if(!req.query["startDate"] && !req.query["endDate"]){
    querObj = {...req.query}
    }
   else{
    
    querObj = {...req.query,"date":{$lte:req.query["endDate"],$gte:req.query["startDate"]},}
     
     delete querObj.startDate
     delete querObj.endDate
   }
  
    const expense = await expenseModel.find(querObj);
  
    res.status(200).json({
      status: "success",
      data: expense,
    });
  });