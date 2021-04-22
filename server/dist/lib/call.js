"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
class Call {
    constructor(call) {
        const [duration, number] = call.split(",");
        const [hour, min, sec] = duration.split(":");
        this.duration = { hour: +hour, min: +min, sec: +sec };
        this.number = +number.replace(/-/g, "");
    }
    durationInSec() {
        return this.duration.hour * 60 * 60 + this.duration.min * 60 + this.duration.sec;
    }
    durationInFullMin() {
        return this.duration.hour * 60 + this.duration.min + (this.duration.sec > 0 ? 1 : 0);
    }
    cost() {
        if (this.durationInSec() < 60 * 5) {
            return this.durationInSec() * 3;
        }
        else {
            return this.durationInFullMin() * 150;
        }
    }
}
exports.Call = Call;
//# sourceMappingURL=call.js.map