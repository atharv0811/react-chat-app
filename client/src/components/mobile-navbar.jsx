import React from 'react'
import { Card } from './ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useNavigation } from '@/hooks/useNavigation';
import { Moon, Sun, UserCircleIcon } from 'lucide-react';
import { useTheme } from '@/context/theme-provider';

const MobileNavbar = () => {
    const paths = useNavigation();
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
            <nav className="w-full">
                <ul className="flex justify-evenly items-center">
                    {
                        paths.map((path, id) => {
                            return <li key={id} className="relative">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div>
                                            <Button asChild size={"icon"} variant={path.active ? "default" : "outline"}>
                                                <Link to={path.href}>
                                                    {path.icon}
                                                </Link>
                                            </Button>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{path.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </li>
                        })
                    }
                    <li>
                        <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
                            {isDark ? (
                                <Sun className="h-5 w-5 text-yellow-500 rotate-0 transition-all" />
                            ) : (
                                <Moon className="h-5 w-5 text-black rotate-0 transition-all" />
                            )}
                        </div>

                    </li>
                    <li>
                        <UserCircleIcon className='cursor-pointer' />
                    </li>
                </ul>
            </nav>

        </Card>
    )
}

export default MobileNavbar