/* global localStorage */

const getKeyValue = (key) => JSON.parse(localStorage.getItem(key))
const setKeyValue = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export {
  getKeyValue,
  setKeyValue
}
