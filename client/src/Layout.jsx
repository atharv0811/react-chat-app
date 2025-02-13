import MobileNavbar from "./components/mobile-navbar"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import { useConversation } from "./hooks/useConversation"
import { cn } from "./lib/utils"

const Layout = ({ children }) => {
    const { isActive } = useConversation();
    return (
        <div className="flex h-screen p-4 w-screen">
            <Navbar />
            <MobileNavbar />
            <div className="flex h-[calc(100%-80px)] lg:h-full w-full">
                <Sidebar />
                <main className={cn("hidden w-full h-full", {
                    'block': isActive,
                    'lg:block': !isActive
                })}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout