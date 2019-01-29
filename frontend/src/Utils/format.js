import moment from 'moment'

export function formatDate(timestamp) {
  return moment.unix(timestamp / 1000).format("MM/DD/YYYY")
}