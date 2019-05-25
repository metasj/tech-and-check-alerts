import HelloWorldCrawlerQueueFactory from './HelloWorldCrawlerQueueFactory'
import AbstractJobScheduler from '../AbstractJobScheduler'
import { Schedules } from '../constants'

const getQueueFactory = () => new HelloWorldCrawlerQueueFactory()

class HelloWorldCrawlerJobScheduler extends AbstractJobScheduler {
  scheduleCron = Schedules.EVERY_MINUTE

  queue = getQueueFactory().getQueue()
}

export default HelloWorldCrawlerJobScheduler
