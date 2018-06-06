"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var kafkaNode = __importStar(require("kafka-node"));
var kafka_node_1 = require("kafka-node");
var KafkaProducer = /** @class */ (function () {
    function KafkaProducer() {
    }
    KafkaProducer.prototype.sendMessage = function () {
        //let producer = new HighLevelProducer("client");
        var clientConfig = {
            kafkaHost: 'localhost:9092',
            connectTimeout: 60000,
            requestTimeout: 30000,
            autoConnect: true,
            clientId: 'node-example-client1'
        };
        var producerConfig = {
            requireAcks: 1
        };
        var client1 = new kafkaNode.KafkaClient(clientConfig);
        //let client = new kafkaNode.Client('localhost:2181', 'node-example-client', {
        //    sessionTimeout: 300,
        //    spinDelay: 100,
        //    retries: 2
        //  });
        var producer = new kafka_node_1.HighLevelProducer(client1, producerConfig);
        var sampleMessage = {
            topic: 'node-test',
            messages: 'Test Message 1',
            key: '1'
        };
        var payloads = [sampleMessage];
        producer.send(payloads, function (error, data) {
            console.log('error:' + error);
            console.log('Kafka Response:' + data);
        });
        console.log('sent msg');
        //kafkaNode.HighLevelProducer()
    };
    return KafkaProducer;
}());
exports.KafkaProducer = KafkaProducer;
