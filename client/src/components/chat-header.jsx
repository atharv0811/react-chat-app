import { Link } from "react-router-dom"
import { Card } from "./ui/card"
import { CircleArrowLeft, Settings } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

const ChatHeader = () => {
    return (
        <Card className="w-full flex rounded-lg items-center p-2 justify-between">
            <div className="flex items-center gap-2">
                <Link to='/conversations' className="block lg:hidden">
                    <CircleArrowLeft />
                </Link>

                <Avatar className="h-8 w-8">
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <h2 className="font-semibold">Atharv</h2>
            </div>

            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button size="icon" variant="secondary">
                            <Settings />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className='cursor-pointer'>
                            Remove friend
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </Card>
    )
}

export default ChatHeader