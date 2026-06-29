import { useJobContext } from "../context/JobContext";

export default function useJobs() {
  return useJobContext();
}