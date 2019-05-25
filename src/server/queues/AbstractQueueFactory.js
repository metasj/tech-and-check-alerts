import Queue from 'bull'
import config from '../config'

class AbstractQueueFactory {
  /**
   * The name of the queue, which should be stored as a constant in
   * queues/index.js
   *
   * OVERRIDE WHEN EXTENDING
   */
  queueName = ''

  /**
   * The location of the job processor
   *
   * OVERRIDE WHEN EXTENDING
   */
  processorLocation = ''

  verifyIsExtendedProperly = () => {
    if (this.queueName === ''
    || this.processorLocation === null) {
      throw new Error('AbstractQueueFactory was extended without proper overrides.')
    }
    return true
  }

  getQueueOptions = () => ({
    redis: config.REDIS_URL,
  })

  getQueue = () => {
    this.verifyIsExtendedProperly()
    const queue = new Queue(this.queueName, config.REDIS_URL)
    queue.process(this.processorLocation)
    return queue
  }
}

export default AbstractQueueFactory
