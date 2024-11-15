'use client'
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { deleteTodoAction } from "@/actinos/todo.actions";
import Spinner from "./Spinner";
import EditTodo from "@/app/EditTodo";
import { ITodo } from "@/interface";

const ButtonTodoList = ({todo}:{todo:ITodo}) => {
   const [isLoading, setIsLoading] = useState(false);
   return (
     <>
       <EditTodo todo={todo}/>
       <Button
         onClick={async () => {
           setIsLoading(true);
           await deleteTodoAction(todo.id as string);
           setIsLoading(false);
         }}
         size={"icon"}
         variant={"destructive"}
       >
         {isLoading ? <Spinner /> : <Trash />}
       </Button>
     </>
   );
}

export default ButtonTodoList;