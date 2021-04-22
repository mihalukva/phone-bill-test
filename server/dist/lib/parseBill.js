"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = require("./call");
const callList_1 = require("./callList");
function parseBill(bill) {
    let regexp = /\d\d:\d\d:\d\d,\d\d\d-\d\d\d-\d\d\d/g;
    let callListStr = bill.match(regexp);
    let callListArr = [];
    if (callListStr !== null) {
        callListArr = callListStr.map((item) => {
            return new call_1.Call(item);
        });
    }
    return new callList_1.CallList(callListArr);
}
exports.default = parseBill;
//# sourceMappingURL=parseBill.js.map