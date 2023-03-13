function App() {
  const handleSubmit = (e) => {
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
    </div>
  );
}

export default App;
