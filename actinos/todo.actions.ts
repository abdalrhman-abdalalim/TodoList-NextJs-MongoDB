'use server'
import { ITodo } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();

export const getTodoListAction = async ({userId}:{userId:string|null}) => {
    return await prisma.todo.findMany({
        where: {
            user_id: userId as string
        },
        orderBy: {
            createdAt:'desc'
        }
    });
};

export const createTodoAction = async (data: { title: string; body?: string | undefined; completed: boolean; userId:string|null}) => {
    await prisma.todo.create({
        data: {
            title: data.title,
            body: data.body,
            completed: data.completed,
            user_id:data.userId as string
        },
       
    });
    revalidatePath("/")
};

export const deleteTodoAction = async (id:string) => {
    await prisma.todo.delete({
        where: {
            id
        }
    })
    revalidatePath('/')
}


export const UpdateTodoAction = async ({id,body,completed,title}:ITodo) => {
    await prisma.todo.update({
        where: {
          id
        },
        data: {
            body: body,
            completed: completed,
            title:title
        }
    })
    revalidatePath("/");
    
};