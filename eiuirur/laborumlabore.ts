
const {Queue} = require('queue-typescript');
const queue = new Queue();

const queueElement = queue.createQueueElement({data: 'task'});

queueElement.addClass('task');
queueElement.hasClass('task'); // true

