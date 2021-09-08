const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const duration = require('dayjs/plugin/duration')

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)

module.exports = dayjs
