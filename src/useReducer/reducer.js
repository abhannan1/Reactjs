export const reducer = (state, action)=>{
    if(action.type === DELETE_ALL_USERS){
        return {...state, usersData:[]}
    }
    if(action.type === RESET_ALL){
        return {...state, usersData:data}
    }
    if(action.type === DELETE_A_USER){
        const newUserData = state.usersData.filter((user)=>user.id !== action?.payload?.id);
        return {...state, usersData:newUserData}
    }
    
    //will return current state "no action will be performed if there is any error"
    //return state

    //or you can throw error
     throw new Error(`No matching ${action.type} action type`)
}