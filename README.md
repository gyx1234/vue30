# my-app

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
###
vue create ***

```
###

 安装mint-ui ：
     1. npm install mint-ui --save

     2. shims-vue.d.ts 文件添加mint-ui：
         declare module "mint-ui";

     3. main.ts 文件引入样式和使用到的组件
         import Mint from 'mint-ui'
         import 'mint-ui/lib/style.css';
         Vue.use(Mint)

```

###

@/views/index.vue  监听 计算属性
@/views/my_child/watch.vue 监听 双向绑定
@/components/tabbar.vue 组件传值

```