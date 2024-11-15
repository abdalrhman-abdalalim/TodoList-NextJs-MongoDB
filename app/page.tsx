import { TodoTable } from "@/components/TodoTable";
import AddTodo from "./AddTodo";
import { getTodoListAction } from "@/actinos/todo.actions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodoListAction({ userId });
  return (
    <div>
      <AddTodo userId={userId} />
      <TodoTable todos={todos} />
    </div>
  );
}
