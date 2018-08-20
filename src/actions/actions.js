



export const dispatchUpdate=(connected)=>{
connected='true';    
return ({
type: "DISPATCH_UPDATE",
connected
});
}