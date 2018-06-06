"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kafkaProducer = /** @class */ (function () {
    function kafkaProducer() {
    }
    kafkaProducer.prototype.sendMessage = function () {
        console.log('sent msg');
    };
    return kafkaProducer;
}());
exports.kafkaProducer = kafkaProducer;
