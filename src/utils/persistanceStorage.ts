export const getItem = (key: string): any => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log(e)
    return null
  }
}

export const setItem = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}