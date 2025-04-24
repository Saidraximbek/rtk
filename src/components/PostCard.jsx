import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ p }) => {
  return (
    <Link
      to={`/product/${p.id}`}
      className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col "
    >
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-56 object-contain mb-4 hover:scale-[1.15] transition"
      />
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
        {p.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3 mb-3">{p.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-green-600 font-bold text-base">${p.price}</span>
        <span className="text-yellow-500 text-sm">
          ⭐ {p.rating?.rate} ({p.rating?.count})
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
