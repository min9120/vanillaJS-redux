import {createStore} from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText =0;

const countModifier = (count = 0, action)=>{
  //()안에서 state를 initialize해줌
if (action.type=="ADD"){
  return count+1;
}else if(action.type=="MINUS"){
  return count-1;
}else return count
}

const countStore = createStore(countModifier)
const onChange = ()=>{
  console.log('there was a change on the store')
  number.innerText =countStore.getState()
}
countStore.subscribe(onChange);//state의 변화를 알 수 있게 해줌 
//countStore.dispatch({type:"ADD"})
//dispatch 로 modifier에게 하고 싶은 말을 전달할 수 있음. type:hello? 면 hello로 전달할 땐 오브젝트 형태로.{__:__}
// store 은 내 data를 저장하는 곳 store을 만들면 reducer를 만들어 달라고 함 
//reducer = function 내 data를 modify하는!
//유일하게 modifier 에서만 데이터를 수정할 수 있는 것이 최고인 부분

const handleAdd = ()=>{
  countStore.dispatch({type:"ADD"})
 

}
add.addEventListener("click",handleAdd)
minus.addEventListener("click", ()=>countStore.dispatch({type:"MINUS"}))