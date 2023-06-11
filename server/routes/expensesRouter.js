const express = require("express");
const expenseController = require("../controllers/expenseController")

const Router = express.Router();

Router.post(
  "/",
 expenseController.CreateExpense
);

Router.get(
    "/",
   expenseController.getExpenses
  );

module.exports = Router;
