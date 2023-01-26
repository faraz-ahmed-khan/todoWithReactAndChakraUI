import React from 'react'
import { VStack ,Spacer, HStack, Text, IconButton, StackDivider , Badge} from '@chakra-ui/react'
import {FaTrash}from "react-icons/fa"

const Todolist = ({todos, deleteTodo}) => {
  if (!todos.length){
    return(
        <Badge colorScheme={"green"} p={4} borderRadius={'lg'} m={4}>
            No Todos !!!!
        </Badge>
    )
  }

  return (
    <VStack
    divider={<StackDivider/>}
    borderColor="blue.100"
    borderWidth={"2px"}
    p="4"
    borderRadius={"lg"}
    w="100vw"
    maxW={{base:"90vw" , sm :"80vw", lg:"50vw" , xl:"40vw"}}   
    alignItems='stretch'
    >

        {todos?.map(todo =>{
            return(
            <HStack key={todo.id}>
                <Text>{todo.body}</Text> 
                <Spacer/>
                <IconButton icon={<FaTrash/>} isRound="true" onClick={()=>deleteTodo(todo.id)}/>
             </HStack>
        )})}
        </VStack>
   
  )
}

export default Todolist