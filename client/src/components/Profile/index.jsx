import React, { useRef, useEffect, useState } from "react";

//components
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";

//rtk query
import {
  useGetUserNameByIdQuery,
  useUpdateUserNameByIdMutation,
} from "../../api/apiSlice";
import { useDispatch } from "react-redux";

//ui slice
import { addNewMessage } from "../../store/slices/uislice";

//uuid4
import { v4 as uuidv4 } from "uuid";

const Profile = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const dispatch = useDispatch();
  const { data } = useGetUserNameByIdQuery({ id: localStorage.getItem("id") });
  const [formError, setError] = useState(null);

  const [updateUser, { data: newData, isSuccess, isError, error, isLoading }] =
    useUpdateUserNameByIdMutation();

  const updateUserHandler = () => {
    setError(null);
    if (firstName.current.value == "" || lastName.current.value == "") {
      setError("required fields are empty");
      return;
    }

    updateUser({
      id: localStorage.getItem("id"),
      user: {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("userData", JSON.stringify(newData?.data));
      dispatch(
        addNewMessage({
          message: "profile updated successfully",
          id: uuidv4(),
        })
      );
    }
  }, [isLoading]);
  console.log(error);
  return (
    <CardContainer>
      <SectionTitle title={"Profile"} className={"!text-left "} />
      <div className="mt-[30px]">
        {formError && <p className="text-red-600">*{formError}</p>}
        <div className=" w-fit mb-[10px] ">
          <label className="font-semibold mb-[10px]">First Name:</label>
          <br></br>
          <input
            type="text"
            ref={firstName}
            className="p-[0.5em] border rounded-md bg-gray-100 mt-[10px] w-[300px] focus:bg-white dark:bg-gray-700 dark:focus:bg-main-black"
            defaultValue={data?.data.firstName}
          />
        </div>
        <div className=" w-fit mb-[10px] ">
          <label className="font-semibold mb-[10px]">Last Name:</label>
          <br></br>
          <input
            ref={lastName}
            type="text"
            className="p-[0.5em] border rounded-md bg-gray-100 mt-[10px] w-[300px] focus:bg-white dark:bg-gray-700 dark:focus:bg-main-black"
            defaultValue={data?.data.lastName}
          />
        </div>
        <div className=" w-fit mb-[10px] ">
          <label className="font-semibold mb-[10px]">Email:</label>
          <br></br>
          <input
            type="text"
            className="p-[0.5em] border rounded-md bg-gray-400 mt-[10px] w-[300px] focus:bg-white dark:bg-gray-900 dark:focus:bg-main-black"
            defaultValue={data?.data.email}
            disabled
          />
        </div>

        <div className="mt-[50px]">
          <button
            onClick={isLoading ? () => {} : updateUserHandler}
            className="p-[0.5rem] text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default Profile;
