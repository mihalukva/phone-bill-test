import ITotalCall from "./ITotalCall";

export default interface IAggregatePhoneBill {
  totalCallList: Array<ITotalCall>;
  totalCost: number;
}
