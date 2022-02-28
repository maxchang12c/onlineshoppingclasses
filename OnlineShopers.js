"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var TimeUtil_1 = require("./TimeUtil");
var OnlineShopers = /** @class */ (function (_super) {
    __extends(OnlineShopers, _super);
    function OnlineShopers(name, userSpecifics) {
        var _this = this;
        var age = (0, TimeUtil_1.getAgeFromDOB)(userSpecifics.dob);
        _this = _super.call(this, { name: name, age: age }) || this;
        _this._dob = userSpecifics.dob;
        _this._email = userSpecifics.email;
        _this._id = userSpecifics.id;
        console.log('online shoppers', _this, 'others');
        return _this;
    }
    Object.defineProperty(OnlineShopers.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        set: function (dob) {
            this._dob = dob;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnlineShopers.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnlineShopers.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnlineShopers.prototype, "tel", {
        get: function () {
            return this._tel;
        },
        set: function (tel) {
            this._tel = tel;
        },
        enumerable: false,
        configurable: true
    });
    return OnlineShopers;
}(Person_1.default));
exports.default = OnlineShopers;
