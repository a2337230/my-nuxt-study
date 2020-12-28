#### 第五天meta混入

可以再nuxt.config.js中全局使用

```
head: {
    title: 'my-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
```

```
// 混入meta

Vue.mixin({
  methods: {
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})
```

组件内使用

```
head() {
  return this.$seo(title,des, [{}])
},
```

自定义html

```
<!DOCTYPE html>
<html {{HTML_ATTRS}}>
<head {{HEAD_ATTRS}}>
  {{HEAD}}
  <!-- 此处可加入个性内容 -->
</head>
<body {{BODY_ATTRS}}>
  {{APP}}
</body>
</html>
```

资源引入

static目录非优化资源，在这个文件夹下的文件打包不会被处理

assets目录下的文件打包会被进行一些优化处理，例如转化为Base64等