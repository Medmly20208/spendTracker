import React from "react";

//components
import LatestCard from "./LatestCard";

//rtq query
import { useGetLatestExpensesQuery } from "../../api/apiSlice";

const LastestExpenses = () => {
  const { data } = useGetLatestExpensesQuery({
    id: JSON.parse(localStorage.getItem("userData"))?.id,
  });

  return (
    <div className="border rounded-2xl p-6 w-full box-border h-fit mt-[40px] bg-white  dark:bg-secondary-black lg:m-0">
      <h1 className="text-2xl font-bold mb-[10px]">Lastest expenses</h1>
      <div className="flex gap-2 flex-wrap justify-center">
        {data?.data.map((expense) => {
          return (
            <LatestCard
              key={expense._id}
              title={expense.title}
              price={expense.amount}
              category={expense.category}
              date={expense.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LastestExpenses;
