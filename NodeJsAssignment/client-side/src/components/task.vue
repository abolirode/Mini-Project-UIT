
<template>
  <div>
<h1>Task List</h1>

<div id="root" class="box">

<input type="text" placeholder="enter the task to be done" v-model="name">
<hr>
<button v-on:click="addTodo" >INSERT</button>

<ul style="list-style-type:none;">
    <li v-for="(todo, todoIndex) in todos" :key="todo._id">

<h4 class="in">
        <span> {{ todo.title }}</span>        
      <button v-on:click="deleteTodo(todo, todoIndex)">  REMOVE</button>

    </h4>
    </li>
  </ul>

</div>


  </div>
</template>
  
<script>

export default {
data() {
    return {
        name:'',
          done:'false',
          completed:'false',

            todos: []
    }
},
        mounted () {
              this.$http.get('/task_list').then(response => {
                   this.todos = response.body;

                  console.log("response from server",response.body)
             });
              },

methods:
{
 addTodo:function()
 {
// eslint-disable-next-line no-console
console.log("shivam")
//alert('in add todo')

// eslint-disable-next-line no-undef

 

   this.$http.post('/task', {title: this.name,done:false})
   .then(response => {
                    console.log('from post method ',response)
                   if(response.status == 201){
                     this.todos.push({id: response.body.todo_id, title: this.name,done:false});
                     this.name=''
                   }
                 }).catch((error)=>{
                     // eslint-disable-next-line no-console
                     console.log('error from serve ',error)
                  
                 });

 },

 deleteTodo(todo, todoIndex){
//alert("in delete todo request sent")
//console.log("id to be deleted ",todo._id)
  this.$http.get('/task_id/'+todo._id).then(response => {
 //console.log("responce.status",response.status)
  //  console.log("responce from server on delete ",response)
    if(response.status == 201){
    //  alert("in if")
      this.todos.splice(todoIndex, 1);
      this.name=''
    }
  });
}

}



}


</script>

<style>
  .back
            {
            width:500px;
            height:100px;
            color:grey;
            background-color:yellow;
            display: inline-block;

            

            }
            .del {
                      text-decoration: line-through;
                  }
            .box
            {
              width:500px;
             height:900px;
             background-color:	#D3D3D3;
             display: inline-block;
             margin: 10px;
             padding-top: 10px;
             padding-left: 10px;
            border-color: red;
            border-style: solid;
            border-width: 2px;
            }

            .in
            {
              background-color: #FFFFE0;
            padding: 5px;

            }
            input[type=checkbox]:checked + label {
            color:red;
            text-decoration: line-through;
}

</style>
