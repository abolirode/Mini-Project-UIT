import Vue from 'vue'
import Router from 'vue-router'

// these are the components we are going to use for routing

/* when the applcation size is very large then we will use lazy routing 
in which we import only those pages to which request is made 
this will increase the performanc as only necessary pages are loaded
*/

const Task =resolve =>{
  require.ensure(['./components/task.vue'],()=>
  { resolve(require('./components/task.vue'));
});
}

const  Test =resolve =>{
  require.ensure(['./components/test.vue'],()=>
  { resolve(require('./components/test.vue'));
});
}

Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '',
      name: 'TASK',
      component:Task
    }
  
  ],
  // used to remove # from the url
  mode:"history"
})