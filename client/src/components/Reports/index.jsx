import React, { useState, useEffect } from "react";

//components
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";
import Modal from "../Modal";
import NewExpenseForm from "../NewExpenseForm";
import Table from "./Table";
import SuccessMessage from "../SuccessMessage";

//rtk
import { useGetExpensesQuery } from "../../api/apiSlice";

//redux
import { useSelector } from "react-redux";

const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const messages = useSelector((content) => content.messages.messages);

  const { data: expenses, refetch } = useGetExpensesQuery({
    userId: localStorage.getItem("id"),
    endDate,
    startDate,
    category,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    refetch();
  }, [startDate, endDate, category]);

  console.log(expenses);
  return (
    <>
      <CardContainer>
        <div className="flex justify-between">
          <SectionTitle title={"Reports"} className={"!text-left "} />
          <a className="mainBtn w-fit" onClick={openModal}>
            New Expense
          </a>
        </div>

        {isModalOpen && (
          <Modal onClose={closeModal}>
            <NewExpenseForm />
          </Modal>
        )}
        <div className="w-full mt-[10px]">
          <form className="flex gap-[20px] p-[10px] flex-wrap items-center bg-gray-100 my-[10px] rounded-lg">
            <div>
              <input
                type="text"
                className="px-[10px] py-[5px] border
             border-gray-500 rounded-md"
                placeholder="expense title"
              ></input>
            </div>
            <div>
              <select
                className="px-[10px] py-[9px] border
             border-gray-500 rounded-md"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Food">Food</option>
                <option value="All">All</option>
                <option value="Shelter">Shelter</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Transportation">Transportation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex gap-[20px] ">
              <div>
                from :{" "}
                <input
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  name="from"
                  id="from"
                  className="px-[10px] py-[5px] border
             border-gray-500 rounded-3xl"
                  defaultValue={"2023-06-01"}
                />
              </div>
              <div>
                to :{" "}
                <input
                  onChange={(e) => setEndDate(e.target.value)}
                  type="date"
                  name="to"
                  id="to"
                  className="px-[10px] py-[5px] border
             border-gray-500 rounded-3xl"
                  defaultValue={"2023-06-11"}
                />
              </div>
            </div>
          </form>
        </div>
        <Table expenses={expenses?.data} />
      </CardContainer>
      <div className="successMessages">
        {messages.map((item, key) => {
          return (
            <SuccessMessage key={item.id} id={item.id} message={item.message} />
          );
        })}
      </div>
    </>
  );
};

export default Reports;
