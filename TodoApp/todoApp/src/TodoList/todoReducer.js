export const todoReducer = (initialState=[], action)=>{
    switch (action.type) {
        case 'ADD-TODO':
            return [...initialState, action.payload]
        case 'DELETE-TODO':
            return initialState.filter(t=>(t.id != action.payload))
         
        default:
            return initialState;
        
    }
}