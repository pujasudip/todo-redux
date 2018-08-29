// export default store => next => action => {
//     //code goes here
//     if(!action.payload || !action.payload.then){
//         return next(action);
//     }
//
//     action.payload.then(response=>{
//         const newAction = {
//             ...action,
//             payload: response
//         }
//
//         store.dispatch(newAction);
//     });
//     return action.payload;
// }

// above looks like this in real
// function(store){
//     return function(next){
//         return function(action){
//             //Code goes here
//         }
//     }
// }

export default store => next => async (action) => {
    //code goes here
    if(!action.payload || !action.payload.then){
        return next(action);
    }

    const response = await action.payload;

    const newAction = {
        ...action,
        payload: response
    };

    store.dispatch(newAction);
}
