import queueDicts from './queues'
import { getQueueFromQueueDict } from './utils/queue'

queueDicts.forEach(async (queueDict) => {
  const queue = getQueueFromQueueDict(queueDict)
  const repeatbleJobs = await queue.getRepeatableJobs()

  console.log(`==${queue.name} Jobs==`)
  if (repeatbleJobs.length === 0) {
    console.log('none')
  } else {
    repeatbleJobs.forEach(job => console.log(`* ${job.name} (${job.cron})`))
  }
})
