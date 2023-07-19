const expenseModel = require("../models/expense.model");
const catchAsync = require("../utils/catchAsync");

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
  let queryObj;

  if (!req.query["startDate"] && !req.query["endDate"]) {
    queryObj = { ...req.query };
  } else {
    queryObj = {
      ...req.query,
      date: {
        $lte: new Date(req.query["endDate"]),
        $gte: new Date(req.query["startDate"]),
      },
    };

    delete queryObj.startDate;
    delete queryObj.endDate;
  }

  if (queryObj.category === "All") {
    queryObj.category = {
      $in: ["Food", "Other", "Transportation", "Entertainment"],
    };
  }

  if (queryObj.search?.length > 0) {
    queryObj.title = { $regex: req.query.search, $options: "i" };
    delete queryObj.search;
  }

  console.log(queryObj);
  const expense = await expenseModel.find(queryObj);

  res.status(200).json({
    status: "success",
    data: expense,
  });
});
