const loginReducer=(state={ count: 1 },action:any)=>{
  window.console.log(state);
  switch(action.type){
    case 'increase':
      return {
          ...state,
          count:state.count+1
      }    
    default:
      return state    
  }


}

export default loginReducer