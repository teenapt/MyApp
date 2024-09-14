import React from 'react';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h5 className="text-2xl font-bold mb-3">{news.title}</h5>
        <p className="text-gray-800 text-base mb-4">{news.description}</p>
        <a
          href={news.url}
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        <p className="text-gray-600 text-xs mt-3">Source: {news.source.name}</p>
      </div>
    </div>
  );
};

export default NewsCard;

