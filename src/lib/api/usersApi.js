import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("https://fakestoreapi.com/products/1");

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/products",
    }),
    getPostById: builder.query({
      query: (id) => `products/${id}`,
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;

export default postsApi;
