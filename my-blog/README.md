# my-blog

#### get请求本地json

json文件必须放在static文件夹中，this.$http.get("相对路径")

#### 过滤器

全局过滤器：
在main.js中:
`
Vue.filter("snippet",function(value){
  return value.slice(0,100)+"...";
})
`

局部过滤器：
在export default{}中：
`
filters:{
    "snippet":function(value){
      return value.slice(0,100)+"...";
    }
  }
`

####自定义指令
v-指令名称
全局：
`
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8)
  }
})
`

局部：
`
directives:{
    "rainbow":{
      bind(el,binding,enode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
}
`