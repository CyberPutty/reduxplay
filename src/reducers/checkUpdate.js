

let initialState={
    connected: 'false'
}
export function checkUpdate(state=initialState,action){
  console.log(action);
    if (action.type==="DISPATCH_UPDATE"){
      return Object.assign({}, state, {
        connected: action.payload
      });  
    }
  return state;
}

// is there any difference with object.assign vs {...state,connected: 'true'}