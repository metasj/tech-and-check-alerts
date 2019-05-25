import queueDicts from '../server/queues'
import { getQueueFromQueueDict } from '../server/utils/queue'

const softUnscheduleJobs = queueDict => queueDict.scheduler.unscheduleJobs()

const hardUnscheduleJobs = async (queueDict) => {
  const queue = getQueueFromQueueDict(queueDict)
  const jobs = await queue.getRepeatableJobs()

  Promise.all(jobs.map(job => queue.removeRepeatableByKey(job.key)))
    .then((results) => {
      console.log(results)
    })
}

const isHardFlagSet = () => process.argv.length > 2 && process.argv[2] === '--hard'

const unscheduleJobs = (queueDict) => {
  if (isHardFlagSet()) {
    hardUnscheduleJobs(queueDict)
  } else {
    softUnscheduleJobs(queueDict)
  }
}
const renderResults = (results) => {
  console.log(results)
}

const promises = queueDicts.map(unscheduleJobs)
Promise.all(promises).then((results) => {
  renderResults(results)
  process.exit()
})
