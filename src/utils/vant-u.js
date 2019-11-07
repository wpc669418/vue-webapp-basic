import {
  Button
} from 'vant'

// 按需调用vant的方法
const vantArray = [
  Button
]

const vantInit = (vue) => {
  if (!vantArray[0]) return
  for (var i in vantArray) {
    vue.use(vantArray[i])
  }
}

export { vantInit }
