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

const newEvery = (arr, callback) => {
    let retorno = false
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        if(callback(currentValue, i, arr)){
            retorno = true
        }
        if(!callback(currentValue, i, arr)){
            return false
        }
    }
    return retorno
}

const newFilter = (arr, callback) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        if(callback(currentValue, i, arr)){
            newArr.push(currentValue)
        }
    }
    return newArr
}

const newConcat = (arr, callback) => {
    let newArr = [...arr]
    for (let i = 0; i < callback.length; i++) {
        newArr.push(callback[i])
    }
    return newArr
}

const newIncludes = (arr, searchValue, start = 0) => {
    for (let i = start; i < arr.length; i++) {
        if(searchValue === arr [i]) {
            return true
        }
    }
    return false
}

const newIndexOf = (arr, searchValue, start = 0) => {
    for (let i = start; i < arr.length; i++) {
        if(searchValue === arr [i]) {
            return i
        }
    }
    return -1
}

