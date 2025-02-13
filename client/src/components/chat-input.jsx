import { useForm } from "react-hook-form"
import { Card } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "./ui/button"
import { SendHorizonal } from "lucide-react"
import TextAreaAutosize from 'react-textarea-autosize'

const chatMessageSchema = z.object({
    content: z.string().min(1, "Field can not be empty")
})

const ChatInput = () => {
    const form = useForm({
        resolver: zodResolver(chatMessageSchema),
        defaultValues: {
            content: ""
        }
    })

    const handleInputChange = (e) => {
        const { value, selectionStart } = e.target;

        if (selectionStart !== null) {
            form.setValue('content', value)
        }
    }

    return (
        <Card className="w-full p-2 rounded-lg relative">
            <div className='flex gap-2 items-end w-full'>
                <Form {...form}>
                    <form className='flex gap-2 items-end w-full'>
                        <FormField
                            control={form.control}
                            name='content'
                            render={({ field }) => {
                                return (
                                    <FormItem className='h-full w-full'>
                                        <FormControl>
                                            <TextAreaAutosize
                                                onKeyDown={async e => {
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        // await form.handleSubmit(handleSubmit)()
                                                    }
                                                }}
                                                rows={1}
                                                maxRows={3}
                                                {...field}
                                                onChange={handleInputChange}
                                                // onClick={handleInputChange}
                                                placeholder='Type a message...'
                                                className='min-h-full w-full resize-none border-0 outline-0 bg-card text-card-foreground placeholder:text-muted-foreground p-1.5'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />
                        <Button disabled={form.formState.isSubmitting} size='icon' type='submit'>
                            <SendHorizonal />
                        </Button>
                    </form>
                </Form>
            </div>
        </Card>
    )
}

export default ChatInput