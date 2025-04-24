import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/posts"}),
  baseQuery: fetchBaseQuery({
    getPosts: builder.query({
      query: () => "/",
    }),
    getPost: builder.query({
      query: (id) => `/${id}`,
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery, useDeletePostMutation } =
  postsApi;

export default postsApi;
