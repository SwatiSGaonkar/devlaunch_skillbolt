import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mb-10">
      <FaSearch className="absolute left-4 top-4 text-gray-400" />

      <input
        type="text"
        placeholder="Search jobs, company or skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-cyan-400"
      />
    </div>
  );
}

export default SearchBar;