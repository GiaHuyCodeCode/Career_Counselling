"use client"

import { usePathname } from "next/navigation"
import { fetchUsers } from "@/app/(auth)/(routes)/actions/fetchUsers"
import { use, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import path from "path"
import { error } from "console"
import { Content } from "next/font/google"

function LayoutProvider ({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isPuplicRoute = ["sign-in", "sign-up"].includes(
        pathname.split("/")[1]
    );

    const getNavbar = () => {
        if (isPuplicRoute) return null;
        return <Navbar/>
    };

    const getContent = () => {
        if (isPuplicRoute) return null;
        return <>{children}</>
    };

    const getFooter = () => {
        if (isPuplicRoute) return null;
        return <Footer/>
    };

    const getCurrentUser = async () => {
        try{
            const response:any = await fetchUsers()
            if (response.error)
                throw new Error(response.error.message)
        } catch (error) {
            console.log(error)
        } finally {
            return;
        }
    };

    useEffect(() => {
        if (!isPuplicRoute) getCurrentUser()
    }, [])

    return (
        <div className="min-h-screen bg-secondary">
            {getNavbar()}
            {getContent()}
            {getFooter()}
        </div>
    )
}

export default LayoutProvider;

