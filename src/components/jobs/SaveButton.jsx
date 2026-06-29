import { FaHeart, FaRegHeart } from "react-icons/fa";
import useJobs from "../../hooks/useJobs";

function SaveButton({ job }) {
  const { saveJob, removeJob, isSaved } = useJobs();


  const saved = isSaved(job._id);

  const handleClick = () => {
    if (saved) {
      removeJob(job._id);
    } else {
      saveJob(job);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full mt-3 py-2 rounded-lg transition font-semibold flex justify-center items-center gap-2
      ${
        saved
          ? "bg-rose-600 hover:bg-rose-500 text-white"
          : "border border-cyan-400 hover:bg-cyan-400 hover:text-black"
      }`}
    >
      {saved ? <FaHeart /> : <FaRegHeart />}

      {saved ? "Saved" : "Save Job"}
    </button>
  );
}

export default SaveButton;