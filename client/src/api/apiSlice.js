import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_LINK }),
  tagTypes: ["expense", "blog"],
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: (query) => ({
        url: `/expenses?${Object.keys(query)
          .map((item) => `${item}=${query[item]}`)
          .join("&")}`,
        method: "GET",
      }),
      providesTags: ["expense"],
    }),
    getLatestExpenses: builder.query({
      query: (query) => ({
        url: `/expenses/latest/${query.id}`,
        method: "GET",
      }),
      providesTags: ["expense"],
    }),
    addExpense: builder.mutation({
      query: (expense) => ({
        url: "/expenses",
        method: "POST",
        body: expense,
      }),
      invalidatesTags: ["expense"],
    }),
    editExpense: builder.mutation({
      query: (expense) => ({
        url: `/expenses/${expense.id}`,
        method: "PUT",
        body: expense.expense,
      }),
      invalidatesTags: ["expense"],
    }),
    addMessage: builder.mutation({
      query: (message) => ({
        url: "/messages",
        method: "POST",
        body: message,
      }),
    }),
    getMessagesByRoomId: builder.query({
      query: (query) => ({
        url: `/messages/${query.room}`,
        method: "GET",
      }),
    }),

    getUserNameById: builder.query({
      query: (query) => ({
        url: `/users/${query.id}`,
        method: "GET",
      }),
    }),
    updateUserNameById: builder.mutation({
      query: (query) => ({
        url: `/users/${query.id}`,
        body: query.user,
        method: "PUT",
      }),
    }),

    deleteExpenseById: builder.mutation({
      query: (query) => ({
        url: `/expenses/${query.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["expense"],
    }),

    addBlogPost: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["blog"],
    }),

    getAllBlogPosts: builder.query({
      query: (blog) => ({
        url: "/blogs",
        method: "get",
      }),
      providesTags: ["blog"],
    }),

    getBlogPostsById: builder.query({
      query: (blog) => ({
        url: `/blogs/${blog.id}`,
        method: "get",
      }),
      providesTags: ["blog"],
    }),

    likePostsById: builder.mutation({
      query: (like) => ({
        url: `/blogs/${like.postId}/likes`,
        method: "PATCH",
        body: like,
      }),
      invalidatesTags: ["blog"],
    }),

    commentPostsById: builder.mutation({
      query: (comment) => ({
        url: `/blogs/${comment.postId}/comments`,
        method: "PATCH",
        body: comment,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const authSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_LINK }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: `/users/signup`,
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useAddExpenseMutation,
  useAddMessageMutation,
  useGetMessagesByRoomIdQuery,
  useGetUserNameByIdQuery,
  useUpdateUserNameByIdMutation,
  useDeleteExpenseByIdMutation,
  useEditExpenseMutation,
  useGetLatestExpensesQuery,
  useAddBlogPostMutation,
  useGetAllBlogPostsQuery,
  useGetBlogPostsByIdQuery,
  useLikePostsByIdMutation,
  useCommentPostsByIdMutation,
} = apiSlice;

export const { useLoginMutation, useRegisterMutation } = authSlice;
