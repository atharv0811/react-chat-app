import { Card } from "./ui/card"
import { useLocation } from "react-router-dom"
import Groups from "./groups"
import Conversations from "./conversations"
import { useConversation } from "@/hooks/useConversation"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const { isActive } = useConversation();
    const { pathname } = useLocation();
    const isGroups = pathname.startsWith('/groups')

    return (
        <Card className={cn("hidden w-full lg:w-96 lg:mx-4 p-2", {
            'block': !isActive,
            'lg:block': isActive
        })}>
            {
                isGroups ? (
                    <Groups />
                ) : (
                    <Conversations />
                )
            }
        </Card>
    )
}

export default Sidebar