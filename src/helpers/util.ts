const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
// Object.prototype.toString.call(2) // "[object Number]"
// Object.prototype.toString.call('') // "[object String]"
// Object.prototype.toString.call(true) // "[object Boolean]"
// Object.prototype.toString.call(undefined) // "[object Undefined]"
// Object.prototype.toString.call(null) // "[object Null]"
// Object.prototype.toString.call(Math) // "[object Math]"
// Object.prototype.toString.call({}) // "[object Object]"
// Object.prototype.toString.call([]) // "[object Array]"
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
