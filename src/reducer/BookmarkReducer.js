

export function BookmarksReducer(state,action){

    switch(action.type){
        case"loading": return{
            ...state,
            loading:true
        }
        case"load/bookmarks":return{
            ...state,
            loading:false,
            bookmarks:action.payload,
        }
        case"load/Bookmark":return{
            ...state,
            loading:false,
            singleBookmark:action.payload
        }
        case "create/bookmark":return{
            ...state,
            loading:false,
            bookmarks:[...state.bookmarks,action.payload],
            singleBookmark:action.payload
        }
        case"Delete/bookmark":return{
            ...state,loading:false,
            bookmarks:state.bookmarks.filter(item=>item.id !== action.payload)
        }
        default:{
            throw new Error("Unknown Action")
        }
    }
}