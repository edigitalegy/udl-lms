"use client";
import {Layout,Compass, List, BarChart} from "lucide-react";
import {SidebarItem} from "./sidebar-item";
import {usePathname} from "next/navigation"

const guestRroutes=
[
    {
        icon:Layout,
        label:"dashboard",
        href:"/",
    },
    {
        icon:Compass,
        label:"Browse",
        href:"/search",
    },

]

const teacherRoutes=
[
    {
        icon:List,
        label:"Courses",
        href:"/teacher/courses",
    },
    {
        icon:BarChart,
        label:"Analytics",
        href:"/teacher/analytics",
    },

]

export const SidebarRoutes  = () => {
    const pathname=usePathname();
    const isteacherpage= pathname?.includes("/teacher");
    const routes=isteacherpage? teacherRoutes: guestRroutes;
    return ( 

        <div className="flex flex-col w-full">
            {
                routes.map((route)=>(
                    <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                    />
                ))
            }
        </div>
     );
}
 
