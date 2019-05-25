import { QueueNames } from '../constants'
import AbstractQueueFactory from '../AbstractQueueFactory'

class HelloWorldCrawlerQueueFactory extends AbstractQueueFactory {
  queueName = QueueNames.crawlerQueues.HELLO_WORLD

  processorLocation = `${__dirname}/helloWorldCrawlerJobProcessor.js`
}

export default HelloWorldCrawlerQueueFactory
