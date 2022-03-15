import { newBook } from "./create-book/newBook"
export const startApp  = () =>{
    for (var i = 4; i < 14; i++){
        newBook(i)
     }
}