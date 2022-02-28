"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgeFromDOB = void 0;
function getAgeFromDOB(dob) {
    var diffInTime = Math.abs(dob.valueOf() - new Date().valueOf());
    var diffInYears = Math.ceil(diffInTime / (1000 * 60 * 60 * 24 * 365));
    return diffInYears;
}
exports.getAgeFromDOB = getAgeFromDOB;
