import { useNavigation } from "@/hooks/useNavigation";
import { Card } from "./ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Moon, Sun, UserCircleIcon } from "lucide-react";
import { useTheme } from "@/context/theme-provider";

const Navbar = () => {
    const paths = useNavigation();
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4">
            <nav>
                <ul className="flex flex-col items-center gap-4">
                    {paths.map((path, id) => {
                        return (
                            <li key={id} className="relative">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div>
                                            <Button
                                                asChild
                                                size={"icon"}
                                                variant={path.active ? "default" : "outline"}
                                            >
                                                <Link to={path.href}>{path.icon}</Link>
                                            </Button>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{path.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="flex flex-col items-center gap-4">
                <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
                    {isDark ? (
                        <Sun className="h-5 w-5 text-yellow-500 rotate-0 transition-all" />
                    ) : (
                        <Moon className="h-5 w-5 text-black rotate-0 transition-all" />
                    )}
                </div>
                <UserCircleIcon className="cursor-pointer" />
            </div>
        </Card>
    )
}

export default Navbar