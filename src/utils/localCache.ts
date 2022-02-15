/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
class LocalCache {
  getItem(name: string) {
    const value = localStorage.getItem(name)
    if (value) {
      return JSON.parse(value)
    }
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  deletCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
