import { KafkaProducer } from "./KafkaProducer";

console.log('Hello Index');

let producer = new KafkaProducer();
producer.sendMessage();