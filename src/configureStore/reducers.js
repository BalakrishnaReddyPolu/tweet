export const comments = (state=[],action) =>{
    switch(action.type){
        case "Add": 
        const data = action.data;
        return [...state].concat({text:data.text,time:data.time})
        default: return state;
    }
}

export const tweetText = (state='',action) =>{
    switch(action.type){
        case "ChangeTweetText":         
        return action.data;
        default: return state;
    }
}