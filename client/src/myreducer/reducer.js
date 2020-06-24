const iState = {
    text: "",
    myWishes: [{ _id: 1, wish: "Lodding" }],
}

const reducer = (state = iState , action)=>{
    
    switch(action.type){
        case 'CHANGE_TEXT':return {
            ...state,
            text:action.payload
        };
        case 'GET_WISH':return {
            ...state,
            myWishes:action.payload
        };
        case 'ADD_WISH':return {
            ...state,
            myWishes:[...state.myWishes, action.payload]
        };
        case 'REMOVE_WISH':
            const wishlist = state.myWishes.filter(
                  (item) => item._id !== action.payload._id
                );    
        return {
            ...state,
            myWishes:wishlist
        };

        default:return state;
    }
    if(action.type === "CHANGE_TEXT"){
       return {
           ...state,
           text:action.payload
       }
    }else if(action.type === "GET_WISH"){
        console.log("Reducer : ");
        console.log(action.payload);
        return {
            ...state,
            myWishes:action.payload
        }
    }
    
    return state;
}

export default reducer