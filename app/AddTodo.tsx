"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema } from "@/schema";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { z } from "zod";
import { createTodoAction } from "@/actinos/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "@/components/Spinner";


const AddTodo = ({userId}:{userId:string|null}) => {
  const defaultValues: Partial<z.infer<typeof todoSchema>> = {
    title: "",
    body: "",
    completed:false    
  };
  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues,
    mode: "onChange",
  });
    const onSubmit = async (data: z.infer<typeof todoSchema>) => {
        setIsLoading(true);
        await createTodoAction({completed:data.completed,title:data.title,body:data.body,userId:userId as string});
        setIsLoading(false);
        setIsOpen(false);
    //   console.log(data);
    };
    
    const [isLaoding, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    

  return (
    isOpen && (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="ml-[600px] mb-10">
            <Plus />
            New Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Todo</DialogTitle>
            <DialogDescription>
              Add your new todo with it&apos;s body
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input placeholder="Enter your todo Title" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Textarea placeholder="Enter body of todo" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="completed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <div className="flex items-center">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="ml-2">Completed</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {isLaoding ? <Spinner /> : "Add todo"}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};

export default AddTodo;
