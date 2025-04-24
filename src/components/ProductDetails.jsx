import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../lib/api/usersApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostByIdQuery(id);

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg">Loading...</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">{data.title}</h1>
      </div>
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-80 object-contain rounded-lg shadow-md"
        />
      </div>
      <div className="text-center">
        <p className="text-gray-600 text-lg">{data.description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-green-600">${data.price}</span>
        <span className="text-sm text-yellow-500">
          ⭐ {data.rating?.rate} ({data.rating?.count})
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
