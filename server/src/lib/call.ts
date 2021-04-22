import { CallDuration } from "./types";
export class Call {
  duration: CallDuration;
  number: number;
  constructor(call: string) {
    const [duration, number] = call.split(",");
    const [hour, min, sec] = duration.split(":");
    this.duration = { hour: +hour, min: +min, sec: +sec };
    this.number = +number.replace(/-/g, "");
  }
  durationInSec(): number {
    return this.duration.hour * 60 * 60 + this.duration.min * 60 + this.duration.sec;
  }
  durationInFullMin(): number {
    return this.duration.hour * 60 + this.duration.min + (this.duration.sec > 0 ? 1 : 0);
  }
  cost(): number {
    if (this.durationInSec() < 60 * 5) {
      return this.durationInSec() * 3;
    } else {
      return this.durationInFullMin() * 150;
    }
  }
}
