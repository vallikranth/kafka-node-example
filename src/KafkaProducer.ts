import * as kafkaNode from 'kafka-node';
import { HighLevelProducer } from 'kafka-node';

export class KafkaProducer{
    
    sendMessage(){
        //let producer = new HighLevelProducer("client");
        let clientConfig:kafkaNode.KafkaClientOptions = {
            kafkaHost: 'localhost:9092',
            connectTimeout: 60000,
            requestTimeout: 30000,
            autoConnect: true,
            clientId: 'node-example-client1'
        }
        
        let producerConfig:kafkaNode.ProducerOptions = {
            requireAcks:1
        }

        let client1 = new kafkaNode.KafkaClient(clientConfig);
        //let client = new kafkaNode.Client('localhost:2181', 'node-example-client', {
        //    sessionTimeout: 300,
        //    spinDelay: 100,
        //    retries: 2
        //  });

        let producer:kafkaNode.HighLevelProducer = new HighLevelProducer(client1, producerConfig);
        let sampleMessage:kafkaNode.ProduceRequest = {
            topic: 'node-test',
            messages:'Test Message 1',
            key: '1'
        }

        let payloads: kafkaNode.ProduceRequest[] = [sampleMessage];
        producer.send(payloads, (error: any, data: any) => {
            console.log('error:'+error);
            console.log('Kafka Response:'+data);
        });
        console.log('sent msg');
        //kafkaNode.HighLevelProducer()
    }
}