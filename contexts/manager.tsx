import React, { createContext, useState } from "react";

interface ManagerContextData {
  simulator: ISimulatorProps;
}

export const ManagerContext = createContext<ManagerContextData>(
  {} as ManagerContextData
);

const initialData = [
  { id: "1", origin: "011", destiny: "016", plan: 30, minutes: 20 },
  { id: "2", origin: "016", destiny: "011", plan: 60, minutes: 70 },
  { id: "3", origin: "011", destiny: "017", plan: 120, minutes: 60 },
  { id: "4", origin: "017", destiny: "011", plan: 30, minutes: 120 },
];

export const ManagerProvider: React.FC = ({ children }) => {
  const [simulatorData, setSimulatorData] =
    useState<ISimulatorData[]>(initialData);

  const simulator = {
    data: simulatorData,

    add(item: ISimulatorData) {
      if (simulatorData.length >= 10) {
        return alert("A lista está cheia!");
      }

      setSimulatorData((old) => [
        ...old,
        { ...item, id: String(Math.random()) },
      ]);
    },

    remove(id: any) {
      const result = simulatorData.filter((e) => e.id !== id);
      setSimulatorData(result);
    },
  };

  return (
    <ManagerContext.Provider
      value={{
        simulator,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
};
