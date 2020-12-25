import moment from 'moment'
export function timeFormat(val) {
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
}
export function timeFormat1(val) {
  return moment(val).format('YYYY-MM-DD HH:mm')
}