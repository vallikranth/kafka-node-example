"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KafkaProducer_1 = require("./KafkaProducer");
console.log('Hello Index');
var producer = new KafkaProducer_1.KafkaProducer();
producer.sendMessage();
