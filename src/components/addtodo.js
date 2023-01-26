import React from 'react'
import { useState } from 'react'
import { HStack,  Input,Button ,useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

const Addtodo = ({addtodo}) => {
const [content , setContent]=useState('')
 const toast = useToast()

  const handleSubmit = (e)=>{
e.preventDefault();
if (content){
  const todo ={
    id :nanoid(),
    body: content
  }
  addtodo(todo)
  setContent('')
}else{
  toast({
    title:"Add Content",
    status:"error",
    duration:2000,
    isClosable:true
  })
  return
}

  
  }


  return (
    <form onSubmit={handleSubmit}>
<HStack mt={8}    >
<Input variant={'filled'} placeholder="Add your Todos"  value={content} onChange={(e)=> setContent(e.target.value)} />
<Button colorScheme={'blue'} px="8" type='submit'  >Add Todo</Button>
</HStack> </form>
  )
}

export default Addtodo