# ph_lottery

> lottery games

## Build Setup

``` bash
# install vue_cli

#start to build project
vue init webpack lottery

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## push to github

```bash
    git init
    git add -A
    git commit -m"create project"
   git remote add origin https://github.com/Feiker-XR/invech-lottery.git
   git push -u origin master
```

## use library

```bash
# use sass
    npm install sass-loader --save-dev          /** make sure <style lang="sass/scss"> **/
    npm install node-sass --save-dev            /**  sass don't use "{}" and ";" **/

# use fastclick to solve the delay when click on phone pages
    npm install fastclick --save-dev
----> in main.js
    import fastclick from 'fastclick'
    fastclick.attach(document.getElementById('app'))

 # use babel-polyfill to solve ie unsupport promise
    npm install babel-polyfill --save-dev
 ----> in main.js
    import 'babel-polyfill' // 最好放在前面

 # use vue-awesome-swiper to show the banner images
    npm install vue-awesome-swiper --save-dev
 ---->in main.js
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    Vue.use(VueAwesomeSwiper);
---->on pages
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
          swiper,
          swiperSlide
        }
     }

# use vue-lazyload to load the images
    npm install vue-lazyload --save-dev
---->in main.js
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload,{
    loading: require('@/assets/images/default.png')
  })
----> on pages
  v-lazy="@/assets/images/xxx.png"
```

## page configrations
```bash
# use viewport attrbuite
---->index.html
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">

# zoom the page
----> function zoom(){
          let w = window.innerWidth;
          let body = document.body;
          body.style.zoom = w / 640;
      }
---->in main.js
      mounted(){
        this.zoom();
        window.addEventListener('resize',this.zoom);
        // if use rem
        //document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / designWidh *100 +'px';
      }

# router resolve
    const Page = (resolve) => {
        import('@/components/Page').then((module) => {
          resolve(module);
        })
      }
```

## project structures

```bash
[invech-lottery]
          ├── build
          ├── configs
          ├── node_modules
          ├── src
          │    ├── api           // interface from backend
          │    ├── base          // base components
          │    ├── assets        // common static rosource
          │    │    ├── fonts       // fonts files
          │    │    ├── images      // images files
          │    │    ├── js          // javascript files
          │    │    └── styles      // css files
          │    ├── components    // pages
          │    ├── router        // routers
          │    ├── store         // vuex
          │    ├── App.vue       // App component
          │    └── main.js       // entry
          ├── static
          ├── .babelrc
          ├── .editorconfig
          ├── .gitignore
          ├── .postcssrc.js
          ├── index.html
          ├── package.json
          └── README.md
```
