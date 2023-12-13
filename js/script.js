const{createApp} =Vue

createApp({
     data(){
          return{
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

     }
}).mount('#app')