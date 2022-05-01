import { useContext } from "react";
import { ManagerContext } from "../contexts/manager";

export function useManager() {
  return useContext(ManagerContext);
}
