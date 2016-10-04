 var app = new Vue({
     el:'#app',
     data:{
        books:[],
        mySearch: '',
        orderCol: 'id',
        orderInverse: 1,
        pagination: {
            maxPage:4,
            current:1,
            totalItens:0,
            totalPages:5,
            listNumbers:[],
            listPagination:[]
        }
     },
     methods:{
         filterOrderBy:function(e, col){
             this.orderCol = col;
             this.orderInverse = this.orderInverse * -1;
         },
         previous: function(e){
            e.preventDefault();

             if(this.pagination.current === 1){
                 return false;
             }
             this.pagination.current = this.pagination.current - 1;
         },
         pagePagination:function(e, id){
             e.preventDefault();

         },
         next: function (){
             e.preventDefault();
             if(this.pagination.current === this.pagination.totalPages){
                 return false;
             }
             this.pagination.current = this.pagination.current +1 ;
         }
     },
     ready:function(){
         var self = this;
         self.$http.get('dataServer.json').then(function(response){
             self.books = response.data;
         });
     }
 });