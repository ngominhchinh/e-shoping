import { Link, Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

export default function Admin(){
    return (
        <>
            <h1>Admin</h1>
            <AdminNavbar></AdminNavbar>
            <Outlet></Outlet>
        </>
    )
}