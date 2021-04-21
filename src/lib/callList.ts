import { TotalCall } from "./types";
import { Call } from "./call";
export class CallList {
  totalCallList: Array<TotalCall> = [];
  constructor(private list: Array<Call> = []) {
    console.log(list);
    this.totalCallList = this.aggregate(list);
    this.sort();
    console.log(this.totalCallList);
  }
  private aggregate(list: Array<Call>): Array<TotalCall> {
    let totalCallList: Array<TotalCall> = [];
    list.forEach((newCall: Call) => {
      const index = totalCallList.findIndex((el: TotalCall) => el.number === newCall.number);
      if (index > -1) {
        const oldTotalCall = totalCallList[index];
        totalCallList[index] = {
          number: oldTotalCall.number,
          duration: oldTotalCall.duration + newCall.durationInSec(),
          cost: oldTotalCall.cost + newCall.cost(),
        };
      } else {
        const newTotalCall = {
          number: newCall.number,
          duration: newCall.durationInSec(),
          cost: newCall.cost(),
        };
        totalCallList.push(newTotalCall);
      }
    });
    return totalCallList;
  }
  private sort() {
    function compare(a: TotalCall, b: TotalCall) {
      if (a.duration < b.duration) return 1;
      if (a.duration > b.duration) return -1;
      if (a.number > b.number) return 1;
      if (a.number < b.number) return -1;
      return 0;
    }
    this.totalCallList.sort(compare);
  }
  totalCost() {
    let cost = 0;
    console.log(this.totalCallList.length);
    for (let i = 1; i < this.totalCallList.length; i++) {
      cost += this.totalCallList[i].cost;
    }
    return cost;
  }
}
