import { Link } from "react-router-dom"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import AddFriendDialog from "./add-friend-dialog"

const Conversations = () => {
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h3 className='text-2xl font-semibold tracking-tight'>Chats</h3>
                <AddFriendDialog />
            </div>

            <div>
                {
                    [1, 1, 1, 1].map((_, idx) => {
                        return (
                            <Link to={'/conversations/123'} key={idx} className="w-full">
                                <Card className="p-2 flex flex-row items-center justify-between mb-2 border border-gray-300 dark:border-[#403935]">
                                    <div className="flex flex-row items-center gap-4 truncate">
                                        <Avatar>
                                            <AvatarFallback>A</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col truncate">
                                            <h4 className="truncate">Atharv Karnekar</h4>
                                            <p className="text-sm text-muted-foreground truncate">
                                                Start the conversation
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Conversations