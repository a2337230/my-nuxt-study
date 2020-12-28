## 第六天

在项目中使用TS，需要安装依赖

```
npm i @nuxt/typescript-build
```

在nuxt.config.js中配置

```
buildModules: [
  '@nuxt/typescript-build',
]
```

如果没有tsconfig.json需要创建

```
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "Node",
    "lib": [
      "ESNext",
      "ESNext.AsyncIterable",
      "DOM"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "experimentalDecorators": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
  "exclude": [
    "node_modules",
    ".nuxt",
    "dist"
  ]
}
```

创建 **vue-shim.d.ts** **声明文件来让 vue 编辑器识别 vue**

```
//ts识别全局方法/变量
import VueRouter, {Route} from 'vue-router';
import Vue from 'vue';
import {Store} from 'vuex';
 
declare module '*.vue' {
  export default Vue;
}
 
// 识别 this.$route
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $store: Store<any>;
  }
}
```

