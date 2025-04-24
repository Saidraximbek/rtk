import React from "react";
import { useGetAllPostsQuery } from "../lib/api/usersApi";
import PostCard from "./PostCard";

const PostList = () => {
  const { data, isLoading, error } = useGetAllPostsQuery();
  
  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg">
        ⏳ Mahsulotlar yuklanmoqda...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 text-lg">
        ❌ Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">🛒 Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <PostCard key={product.id} p={product} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
