import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Pagination from './Pagination';
import NewsCard from './NewsCard';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('trending'); // Default to 'trending'
  const [category, setCategory] = useState('general'); // Default category
  const [country, setCountry] = useState('us'); // Default to US news
  const [language, setLanguage] = useState('en');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true while fetching
      try {
        const apiKey = '5a794da2c9a7e433164694e98ecda760';
        const query = searchQuery.trim() !== '' ? searchQuery : 'trending';
        const url = `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&topic=${category}&page=${page}&apikey=${apiKey}`;

        const response = await axios.get(url);
        const data = response.data;

        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
        setTotalPages(Math.ceil((data.totalArticles || 1) / 10));
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchNews();
  }, [searchQuery, category, country, language, page]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gradient">Top Headlines</h1>

      <div className="mb-10">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Filters setCategory={setCategory} setCountry={setCountry} setLanguage={setLanguage} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.length > 0 ? (
            articles.map((news, index) => <NewsCard key={index} news={news} />)
          ) : (
            <div className="col-span-full text-center">
              <p className="text-lg text-gray-600">No articles found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      )}

      <div className="mt-12">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default NewsFeed;

