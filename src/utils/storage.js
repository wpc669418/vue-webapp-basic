const storage = {
  set(key, data) {
    window.localStorage.setItem(key, data)
  },
  get(key) {
    return window.localStorage.getItem(key)
  },
  setJosn(key, data) {
    const data_str = JSON.stringify(data)
    window.localStorage.setItem(key, data_str)
  },
  getJson(key) {
    const data_str = window.localStorage.getItem(key)
    return JSON.parse(data_str)
  }
}

export {
  storage
}
