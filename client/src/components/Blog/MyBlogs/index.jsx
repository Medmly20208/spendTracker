import React, { useState } from "react";

//components

import Modal from "../../Modal";
import NewBlogForm from "./CreateBlog";
import Table from "./Table";

//rtk
import {
  useGetExpensesQuery,
  useGetBlogPostsByUserIdQuery,
} from "../../../api/apiSlice";

//utils
import { addDays } from "../../../utils";

const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(addDays(new Date(), 0));
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const {
    data: blogs,
    refetch,
    isLoading,
  } = useGetBlogPostsByUserIdQuery({
    userId: localStorage.getItem("id"),
    title: search,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(blogs);

  return (
    <div className="mt-[40px]">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">My blogs</h1>
        <a className="mainBtn w-fit" onClick={openModal}>
          New Blog
        </a>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewBlogForm onClose={closeModal} />
        </Modal>
      )}
      <div className="w-full mt-[10px] ">
        <form className="flex gap-[20px] p-[10px] flex-wrap items-center bg-gray-100 my-[10px] rounded-lg dark:bg-secondary-black dark:text-white">
          <div>
            <input
              type="text"
              className="px-[10px] py-[5px] border
             border-gray-500 rounded-md dark:bg-secondary-black"
              placeholder="blog title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
        </form>
      </div>

      <Table blogs={blogs?.data} />
      {isLoading && <p>is Loading</p>}
      {blogs?.data.length === 0 && <p>No results</p>}
    </div>
  );
};

export default Reports;
