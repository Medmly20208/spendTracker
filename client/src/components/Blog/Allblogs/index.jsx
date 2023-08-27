import React from "react";

//api
import { useGetAllBlogPostsQuery } from "../../../api/apiSlice";

//components
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const blogContent = [
    {
      imgUrl:
        "https://image.cnbcfm.com/api/v1/image/102721275-455299823.jpg?v=1692993876&w=740&h=416&ffmt=webp&vtcrop=y",
      id: "dedked",
      title: "how to invest money",
      content:
        "how to invest money how to invest money how to invest money how to invest money",
    },
    {
      imgUrl:
        "https://image.cnbcfm.com/api/v1/image/102721275-455299823.jpg?v=1692993876&w=740&h=416&ffmt=webp&vtcrop=y",
      id: "dedked",
      title: "how to invest money",
      content:
        "how to invest money how to invest money how to invest money how to invest money",
    },
    {
      imgUrl:
        "https://image.cnbcfm.com/api/v1/image/102721275-455299823.jpg?v=1692993876&w=740&h=416&ffmt=webp&vtcrop=y",
      id: "dedked",
      title: "how to invest money",
      content:
        "how to invest money how to invest money how to invest money how to invest money",
    },
    {
      imgUrl:
        "https://image.cnbcfm.com/api/v1/image/102721275-455299823.jpg?v=1692993876&w=740&h=416&ffmt=webp&vtcrop=y",
      id: "dedked",
      title: "how to invest money",
      content:
        "how to invest money how to invest money how to invest money how to invest money",
    },
  ];

  const { data, isLoading } = useGetAllBlogPostsQuery();

  return (
    <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
      {isLoading && "loading..."}

      {data?.data?.map((blog) => {
        return <BlogCard {...blog} />;
      })}
    </div>
  );
};

export default AllBlogs;
