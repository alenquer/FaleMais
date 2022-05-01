declare interface ISimulatorData {
  id?: any;
  origin: string;
  destiny: string;
  plan: number;
  minutes: number;
}

declare interface ISimulatorProps {
  data: IData[];
  add: (item: ISimulatorData) => void;
  remove: (id: any) => void;
}
