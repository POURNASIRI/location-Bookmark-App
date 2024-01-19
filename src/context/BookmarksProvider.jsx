import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { BookmarksReducer } from "../reducer/BookmarkReducer";



const BookmarksContext = createContext()

const inintialState = {
    loading:false,
    bookmarks:[],
    singleBookmark:{},
    error:false
}


export function BookmarksProvider({children}){

            const[{loading,bookmarks,singleBookmark,error},dispatch] = useReducer(BookmarksReducer,inintialState)


        useEffect(()=>{
            async function GetBookmarks(){
                try {
                    dispatch({type:"loading"})
                    const {data} = await axios.get("https://json-server-s6rb.onrender.com/bookmarks")
                    dispatch({type:"load/bookmarks",payload:data})
                } catch (error) {
                    
                }
            }
            GetBookmarks()
        },[])

        const getSingleBookmark = async(id)=>{

            if(Number(id)=== singleBookmark?.id) return;
            try {
                dispatch({type:"loading"})
                const {data} = await axios.get(`https://json-server-s6rb.onrender.com/bookmarks/${id}`)
                dispatch({type:"load/Bookmark",payload:data})
            } catch (error) {
                
            }
        }

        const createNewBookmar = async(newBookmar)=>{
            try {
                const {data} = await axios.post("https://json-server-s6rb.onrender.com/bookmarks",newBookmar)
                dispatch({type:"create/bookmark",payload:data})
            } catch (error) {
                
            }
        }

        const deleteBookmark = async(id)=>{
            try {
                await axios.delete(`https://json-server-s6rb.onrender.com/bookmarks/${id}`)
                dispatch({type:"Delete/bookmark", payload:id})
            } catch (error) {
                
            }
        }

    return(
        <BookmarksContext.Provider value={{bookmarks,loading,
        getSingleBookmark,
        singleBookmark,
        createNewBookmar,
        deleteBookmark}}>
            {children}
        </BookmarksContext.Provider>
    )
}



export function UseBookmarks(){
    return useContext(BookmarksContext)
}