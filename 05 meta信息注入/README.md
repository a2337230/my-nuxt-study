## 第四天

在plugins中新建一个文件，例如叫做mixins.js

假如 内部写入一个方法

```
// 定义全局方法
import Vue from 'vue'

let isShow = () => console.log('这是一个全局方法')

Vue.prototype.$show = isShow; // 在服务器钩子内部不可以使用，this不会指向Vue实例
```

之后就可以在组件内部调用

```
mounted() {
    this.$show()
  },
```

#### 定义全局过滤器

在真实项目中可能过滤器会非常多，这里我们创建一个JS文件区分各种过滤器

例如时间过滤器

```
import moment from 'moment'
export function timeFormat(val) {
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
}
export function timeFormat1(val) {
  return moment(val).format('YYYY-MM-DD HH:mm')
}
```

在mixins中引入全局过滤器

```
// 定义全局方法
import Vue from 'vue'

let isShow = () => console.log('这是一个全局方法')

Vue.prototype.$show = isShow; // 在服务器钩子内部不可以使用，this不会指向Vue实例

// 全局过滤器
import * as filters from '../assets/js/TimeFilters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
```

在组件中使用

```
<div class="container">
  <p>当前时间:{{time | timeFormat}}</p>
  <p>当前时间:{{time | timeFormat1}}</p>
</div>
```

#### 公共组件

与Vue用法相同

首先创建一个公共组件，例如

```
<template>
  <div>
    <button>一个公共组件按钮</button>
  </div>
</template>
```

全局引入

```
// 全局组件
import XlButton from './../components/xlButton.vue'
Vue.use(XlButton)
```

页面中使用

```
<template>
  <div class="container">
    <p>当前时间:{{time | timeFormat}}</p>
    <p>当前时间:{{time | timeFormat1}}</p>
    <xl-button></xl-button>
  </div> 
</template>
```

