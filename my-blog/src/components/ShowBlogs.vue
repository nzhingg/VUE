<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客预览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
export default{
  name: "show-blogs",
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      this.blogs = data.body.slice(0,10);
      console.log(this.blogs)
    })
  },
  computed:{
    filterBlogs(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
  filters:{
    "to-uppercase":function(value){
      return value.toUpperCase();
    }
  },
  directives:{
    "rainbow":{
      bind(el,binding,enode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
  }
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>