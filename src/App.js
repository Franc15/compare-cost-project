import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd66f3e0275msh6e1eb0655795b8fp1dfa31jsn4e5dfbdd171e',
        'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
      }
    };
    
    fetch('https://country-facts.p.rapidapi.com/all', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => setError(err));

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].capital[0] + ', ' + data[i].name['common']);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Compare Cost of Living</h1>
      <form onSubmit={handleSubmit} className="">
        <label 
            className="text-ml font-bold"
            htmlFor="city1">City 1</label>
        <input 
            className="ml-2 border-2 border-gray-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            name="city1" id="city1" type="text" placeholder="Enter city name" />
        <label
            className="ml-2 text-ml font-bold" 
            htmlFor="city2">City 2</label>
        <input
            className="ml-2 border-2 border-gray-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            name="city2" id="city2" type="text" placeholder="Enter city name" />
        <button 
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit">Compare</button>
      </form>
      <div className="mt-4">
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default App;
