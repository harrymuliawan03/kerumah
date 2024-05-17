import { DashboardProvider } from "@/contexts/dashboard/dashboardContext"
import Nav from "./components/layout/Nav"
import SideNav from "./components/layout/SideNav"


interface Props{
    children: React.ReactNode
}

export default function LayoutDashboard(props: Props) {
    return(
        <DashboardProvider>
            <Nav />
            <SideNav />
            {props.children}
        </DashboardProvider>
    )
}