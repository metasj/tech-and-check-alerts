
class AbstractJobScheduler {
  scheduleCron = ''

  queue = null

  verifyIsExtendedProperly = () => {
    if (this.scheduleCron === ''
    || this.queue === null) {
      throw new Error('AbstractJobScheduler was extended without proper overrides.')
    }
    return true
  }

  getRepeatOptions = () => ({
    cron: this.scheduleCron,
  })

  getScheduleName = () => `repeating-${this.queue.name}`

  scheduleJobs = () => {
    this.verifyIsExtendedProperly()
    return this.queue.add(
      this.getScheduleName(),
      {},
      { repeat: this.getRepeatOptions() },
    )
  }

  unscheduleJobs = () => {
    this.verifyIsExtendedProperly()
    return this.queue.removeRepeatable(
      this.getScheduleName(),
      this.getRepeatOptions(),
    )
  }
}

export default AbstractJobScheduler
