const{createApp} =Vue

createApp({
     data(){
          return{
               new_task:'',
               todolist:[
                    {
                         text:'pomoro',
                         done:false
                    },
                    {
                         text:'banana',
                         done:true
                    },
                    {
                         text:'cetriolo',
                         done:true
                    },
                    {
                         text:'mandarino',
                         done:false
                    },
                    {
                         text:'papajia',
                         done:false
                    }

               ]

          }
     },
     methods:{
          delet(index){
               this.todolist.splice(index,1);
          },
          add_new_task(){
               this.todolist.push({
                    text: this.new_task,
                    done: false
               })
               this.new_task = ''
          }
     }
}).mount('#app')