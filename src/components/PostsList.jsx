import React from "react";
import { useGetAllPostsQuery } from "../lib/api/usersApi";
import PostCard from "./PostCard";

const PostList = () => {
  const { data, isLoading, error } = useGetAllPostsQuery();

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <PostCard key={product.id} p={product} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
