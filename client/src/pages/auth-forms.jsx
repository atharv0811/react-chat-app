import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import Login from "@/components/login";
import Register from "@/components/register";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AuthForms = () => {
  const [activeTab, setActiveTab] = useState("login");

  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Authentication</CardTitle>
            <div
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500 rotate-0 transition-all" />
              ) : (
                <Moon className="h-5 w-5 text-black rotate-0 transition-all" />
              )}
            </div>
          </div>
          <CardDescription>Login or create a new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Login />
            </TabsContent>
            <TabsContent value="register">
              <Register setActiveTab={setActiveTab} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForms;
