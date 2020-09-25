//ES6语法 导入导出    以前有commonJS作为导入导出 module.exports require()
let name='xiaoming'
let age=18
let flag=true;
if(flag){
  console.log('yeah,我是小明')
}
function sum(num1,num2) {
  console.log(num1+num2)
}
export {
  name,age,sum,flag
}