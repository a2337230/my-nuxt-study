// 定义全局方法
import Vue from 'vue'

let isShow = () => console.log('这是一个全局方法')

Vue.prototype.$show = isShow; // 在服务器钩子内部不可以使用，this不会指向Vue实例