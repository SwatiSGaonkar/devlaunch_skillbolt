import { createContext, useContext, useMemo, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);

  const saveJob = (job) => {
    setSavedJobs((prev) => {
      const exists = prev.find(
        (item) => item._id === job._id
      );

      if (exists) return prev;

      return [...prev, job];
    });
  };

  const removeJob = (_id) => {
    setSavedJobs((prev) =>
      prev.filter((job) => job._id !== _id)
    );
  };

  const isSaved = (_id) => {
    return savedJobs.some(
      (job) => job._id === _id
    );
  };

  const value = useMemo(
    () => ({
      savedJobs,
      saveJob,
      removeJob,
      isSaved,
    }),
    [savedJobs]
  );

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error(
      "useJobContext must be used inside JobProvider."
    );
  }

  return context;
}