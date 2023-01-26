import {Heading, VStack , IconButton, useColorMode} from "@chakra-ui/react"
import './App.css';
import Addtodo from "./components/addtodo";
import Todolist from "./components/todolist";
import {FaSun, FaMoon} from "react-icons/fa"
import { useState ,useEffect } from "react";



function App() {
  const initail_todos= [
    {
        id:1,
        body:"faraz",
     
    },
    {
        id:2,
        body:"faraz",
     
    }
]

const [todos , setTodos] =useState(initail_todos)

function deleteTodo (id){
  const newtodos = todos.filter(todo =>{
    return todo.id !== id
  })
  setTodos(newtodos)
}

function addtodo (todo){
  setTodos([...todos, todo])
}

const {colorMode, toggleColorMode} =useColorMode()
  return (
    <div>
      <VStack p={4}>
        <IconButton onClick={toggleColorMode} icon={ colorMode === "light"? <FaSun/>:<FaMoon/> } p={4} isRound="true" size="lg" alignSelf="flex-end"/>
      <Heading mb={4} size="2xl" h={55} fontWeight="extrabold" bgClip={"text"}  bgGradient='linear(to-r, cyan.300, blue.500)'>
      Todo App
      </Heading>
     <Todolist todos={todos} deleteTodo={deleteTodo}/>
     <Addtodo addtodo={addtodo}/>
      </VStack>
    </div>
  );
}

export default App;
