import Queue from 'bull';
import config from '../../config/config';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, config.redis.REDIS_HOST_PORT),
  name: job.key,
  handle: job.handle,
  options: job.options,
}))

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name);
    queue.options = { delay: config.redis.DELAY};
    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data);
        console.log(err);
      });

      queue.bull.on('completed', (job, result) => {
        console.log('Job complete', result);
      });
    })
  }
};
