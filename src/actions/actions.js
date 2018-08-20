



export const dispatchUpdate=(connected)=>{
connected='true';    
return ({
type: "DISPATCH_UPDATE",
payload: connected
});
}