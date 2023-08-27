import React, { useState, useEffect } from "react";

import { useAddExpenseMutation } from "../../../api/apiSlice";

//utils
import { getCurrentDate, addDays } from "../../../utils";

//REDUX
import { addNewMessage } from "../../../store/slices/uislice";
import { useDispatch } from "react-redux";

//uuid4
import { v4 as uuidv4 } from "uuid";

const EditBlog = (props) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="p-[20px] bg-white rounded-sm dark:bg-main-black w-[80vw] lg:w-[500px] ">
      <form className="flex flex-col gap-[10px] flex-wrap mb-6">
        {formError && <p className="text-red-500">*{formError}</p>}
        <div className="flex flex-col gap-[10px] items-stretch flex-wrap w-full">
          <div className="w-full">
            <label>Image url:</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://imageurl.com"
              className="border p-[10px] w-full rounded-lg dark:bg-main-black"
              maxLength={20}
            />
          </div>
          <div>
            <label>Title:</label>
            <br></br>
            <input
              type="text"
              placeholder="how to invest money"
              onChange={(e) => setTitle(e.target.value)}
              className="border p-[10px] w-full rounded-lg dark:bg-main-black"
              maxLength={20}
            />
          </div>
          <div>
            <label>Content:</label>
            <br></br>
            <textarea
              type="text"
              placeholder="how to invest money"
              onChange={(e) => setTitle(e.target.value)}
              className="border p-[10px] w-full rounded-lg dark:bg-main-black "
              rows={10}
            />
          </div>
        </div>
      </form>
      <a className="mainBtn">Edit blog</a>
    </div>
  );
};

export default EditBlog;
