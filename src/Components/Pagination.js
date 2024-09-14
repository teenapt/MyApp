import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePageInput = (event) => {
    const newPage = Math.max(1, Math.min(Number(event.target.value), totalPages)); // Ensure input stays within bounds
    setPage(newPage);
  };

  return (
    <div className="flex items-center justify-center my-8">
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        className={`px-4 py-2 rounded-full shadow-md transition ${
          page === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        disabled={page === 1}
      >
        <span className="font-semibold">← Previous</span>
      </button>

      <div className="flex items-center mx-4">
        <span className="text-lg text-gray-600">Page</span>
        <input
          type="number"
          value={page}
          onChange={handlePageInput}
          className="mx-2 w-14 text-center border-2 border-gray-300 rounded-lg p-1 text-lg focus:outline-none focus:border-blue-500"
          min="1"
          max={totalPages}
        />
        <span className="text-lg text-gray-600">of {totalPages}</span>
      </div>

      <button
        onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
        className={`px-4 py-2 rounded-full shadow-md transition ${
          page === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        disabled={page === totalPages}
      >
        <span className="font-semibold">Next →</span>
      </button>
    </div>
  );
};

export default Pagination;

