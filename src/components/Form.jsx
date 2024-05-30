import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update } from '../features/todos/todoSlice'





const Form = () => {

 const {edit} = useSelector((state) => state.todos)

const [text , setText] = useState("")

const dispatch = useDispatch()



const handleSubmit = (e) => {
e.preventDefault();

if(edit.isEdit){
  dispatch(update({
    id: edit.todo.id,
    text
  }))
}else{
  dispatch(
    add({
      id:crypto.randomUUID(),
      text,
    })
  );

  setText("");
  
};



// const newTodo =   {
//   id:crypto.randomUUID(),
//   text:text
// }

// dispatch(add(newTodo));


};


useEffect(()=>{

  setText(edit.todo.text)

},[edit])


//     const [text ,setText] =useState("")

// const handleSubmit = (e) => {
//    e.preventDefault()
//   //  addTodo(text);
//   if (edit.editMode){
//     updateTodo(edit.todo.id , text)}
//     else {
//       addTodo(text)
//     } 
//  setText("");
// }

// useEffect(()=>{
//  setText(edit.todo.text);
// },[edit]);






  return (
    <form action="" className='my-5 p-5' onSubmit={(e)=>handleSubmit(e)} >

        <input type="text" className="form-control rounded-0 my-3" placeholder="text" 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        required
      
        />
        <button className="btn btn-success rounded-0 w-100">save</button>
    </form>
  )
}

export default Form
