const newForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        callback(currentValue, i, arr)
    }
}
const numbers = [5, 12, 8, 130, 44]

const newFill = (arr, filler, start = 0, end = arr.length) => {
    for (let i = start; i < end; i++) {
        arr[i] = filler
    }
    return arr
}

const newMap = (arr, callback) => {
    let newArr = []
  for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i]
      newArr.push(callback(currentValue, i, arr))
  }
  return newArr
}

const newSome = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        if(callback(currentValue, i, arr)){
            return true
        }
    }
    return false
}

const newFind = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        callback(currentValue, i, arr)
        if (callback(currentValue, i, arr)) return currentValue
    }
    return undefined
}

const newFindIndex = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        callback(currentValue, i, arr)
        if (callback(currentValue, i, arr)) return i
    }
    return -1
}

