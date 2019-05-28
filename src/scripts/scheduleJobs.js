import queueDicts from '../server/queues'

const scheduleJobs = queueDict => queueDict.scheduler.scheduleJobs()

const renderResults = (results) => {
  results.forEach(result => console.log(`Scheduled job: ${result.name}`))
}

const promises = queueDicts.map(scheduleJobs)
Promise.all(promises).then((results) => {
  renderResults(results)
  process.exit()
})
