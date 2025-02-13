import { MessageSquare, Users } from "lucide-react"
import { useMemo } from "react"
import { useLocation } from "react-router-dom";

export const useNavigation = () => {
    const { pathname } = useLocation();

    const paths = useMemo(() => [
        {
            name: "Conversations",
            href: "/conversations",
            icon: <MessageSquare />,
            active: pathname.startsWith("/conversations"),
        },
        {
            name: "Groups",
            href: "/groups",
            icon: <Users />,
            active: pathname.startsWith("/groups"),
        }
    ], [pathname])

    return paths
}

