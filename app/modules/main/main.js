/**
 * @class main.js
 * @description main.js
 * @author 吴小伟(shevy) <836790625@qq.com> 2016/5/18 21:41
 */

Vue.component('home',{
});
var app= new Vue({
  el:'#app',
  data:{
    currentView: 'home'
  }
});

app.currentView= 'page';