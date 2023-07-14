import React, { useState, useEffect } from "react";

import { useAddExpenseMutation } from "../api/apiSlice";

//utils
import { getCurrentDate } from "../utils";

//REDUX
import { addNewMessage } from "../store/slices/uislice";
import { useDispatch } from "react-redux";

//uuid4
import { v4 as uuidv4 } from "uuid";

const NewExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(getCurrentDate());
  const dispatch = useDispatch();

  const [addExpense, { data, isSuccess, isError, error, isLoading }] =
    useAddExpenseMutation();

  const newExpenseHandler = () => {
    addExpense({
      userId: localStorage.getItem("id"),
      title,
      category,
      amount,
      date,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        addNewMessage({
          message: "expense added successfully",
          id: uuidv4(),
        })
      );
    }
  }, [isLoading]);

  return (
    <div className="p-[20px] bg-white rounded-sm">
      <form className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px] items-stretch">
          <div>
            <label>Title:</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="border p-[10px] w-[187px] rounded-lg"
            />
          </div>
          <div>
            <label>Type:</label>
            <br></br>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border p-[10px] w-[187px] rounded-lg"
            >
              <option value="Food">Food</option>
              <option value="Shelter">Shelter</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Transportation">Transportation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex gap-[10px] mb-[20px]">
          <div>
            <div>
              <label>Amount:</label>
              <br></br>
              <input
                type="number"
                min={0}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-[10px] w-[187px] rounded-lg"
              />
            </div>
          </div>

          <div>
            <label>Date:</label>
            <br></br>
            <input
              type="date"
              max={getCurrentDate()}
              onChange={(e) => setDate(e.target.value)}
              className="border p-[10px] w-[187px] rounded-lg"
            />
          </div>
        </div>
      </form>
      <a className="mainBtn" onClick={isLoading ? () => {} : newExpenseHandler}>
        {isLoading ? "loading" : "Add expense"}
      </a>
    </div>
  );
};

export default NewExpenseForm;
