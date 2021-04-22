import { Call } from "./call";
import { CallList } from "./callList";

export default function parseBill(bill: string):CallList {
  let regexp = /\d\d:\d\d:\d\d,\d\d\d-\d\d\d-\d\d\d/g;
  let callListStr: Array<string> | null = bill.match(regexp);
  let callListArr: Array<Call> = [];
  if (callListStr !== null) {
    callListArr = callListStr.map((item: string) => {
      return new Call(item);
    });
  }
  return new CallList(callListArr);
}
