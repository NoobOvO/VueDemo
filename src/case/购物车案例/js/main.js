let app = new Vue({
      el:'#app',
      data:{
        books:[
          {
            id:0,
            name:'《算法笔记》',
            date:'2006-9',
            price:85.00,
            count:1
          },
          {
            id:1,
            name:'《UNIX编程艺术》',
            date:'2008-2',
            price:59.00,
            count:1
          },
          {
            id:2,
            name:'《编程珠玑》',
            date:'2006-9',
            price:39.00,
            count:1
          },
          {
            id:3,
            name:'《代码大全》',
            date:'2006-3',
            price:128.00,
            count:1
          }
        ]

      },
     filters:{
        getFinalPrice(price){
          return  '￥'+price.toFixed(2);
        }
     },
     methods:{
        add(index){
          this.books[index].count++;
        },
        sub(index){
          this.books[index].count--;
       },
       removeMe(index){
          //删除节点
         if(confirm('这东西你不要了?')){
           this.books.splice(index,1); //从谁开始删除 删几个
         }
       }
     },
     computed:{
        sumPrice(){ //总价格
          let rs=0;
          for (let i = 0; i <this.books.length ; i++) {
            rs +=  this.books[i].price*this.books[i].count;
          }
          return rs;
        }

     }
     //最后需求 当没有节点时 显示购物车内容为空
    });
