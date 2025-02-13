import ChatBody from '@/components/chat-body'
import ChatHeader from '@/components/chat-header'
import ChatInput from '@/components/chat-input'
import { Card } from '@/components/ui/card'
import Layout from '@/Layout'

const GroupConversation = () => {
    return (
        <Layout>
            <Card className="p-2 h-full flex flex-col">
                <ChatHeader />
                <ChatBody />
                <ChatInput />
            </Card>
        </Layout>
    )
}

export default GroupConversation