import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interface";
import { Badge } from "./ui/badge";
import ButtonTodoList from "./ButtonTodoList";




export function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption>{todos.length ? "A list of your recent todos.":"No Todos Yet"}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>title</TableHead>
          <TableHead className="ml-5">completed</TableHead>
          <TableHead className="text-right">actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo?.id}</TableCell>
            <TableCell>{todo?.title}</TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge variant={'default'}>Completed</Badge>
              ) : (
                <Badge variant={'secondary'}>UnCompleted</Badge>
              )}
            </TableCell>
            <TableCell className="text-right flex items-center space-x-2 justify-end">
                <ButtonTodoList todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
