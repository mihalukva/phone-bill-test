"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallList = void 0;
class CallList {
    constructor(list = []) {
        this.list = list;
        this.totalCallList = [];
        this.totalCallList = this.aggregate(list);
        this.sort();
    }
    aggregate(list) {
        let totalCallList = [];
        list.forEach((newCall) => {
            const index = totalCallList.findIndex((el) => el.number === newCall.number);
            if (index > -1) {
                const oldTotalCall = totalCallList[index];
                totalCallList[index] = {
                    number: oldTotalCall.number,
                    duration: oldTotalCall.duration + newCall.durationInSec(),
                    cost: oldTotalCall.cost + newCall.cost(),
                };
            }
            else {
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
    sort() {
        function compare(a, b) {
            if (a.duration < b.duration)
                return 1;
            if (a.duration > b.duration)
                return -1;
            if (a.number > b.number)
                return 1;
            if (a.number < b.number)
                return -1;
            return 0;
        }
        this.totalCallList.sort(compare);
    }
    totalCost() {
        let cost = 0;
        for (let i = 1; i < this.totalCallList.length; i++) {
            cost += this.totalCallList[i].cost;
        }
        return cost;
    }
}
exports.CallList = CallList;
//# sourceMappingURL=callList.js.map