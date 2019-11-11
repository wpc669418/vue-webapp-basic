import {
  Button,
  Icon,
  dialog,
  Tab,
  Tabs,
  Field,
  Cell,
  CellGroup,
  Popup,
  Picker,
  DatetimePicker,
  NavBar
} from 'vant'

// 按需调用vant的方法
const vantArray = [
  Button,
  Icon,
  dialog,
  Tab,
  Tabs,
  Field,
  Cell,
  CellGroup,
  Popup,
  Picker,
  DatetimePicker,
  NavBar
]

const vantInit = (vue) => {
  if (!vantArray[0]) return
  for (var i in vantArray) {
    vue.use(vantArray[i])
  }
}

export { vantInit }
