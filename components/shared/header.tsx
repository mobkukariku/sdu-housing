
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "../ui/button"
import { Container } from "./container"
import Image from "next/image";
import { FC } from "react";
import { NavLink } from "./navLink";

interface Props {
    className?: string
}

export const Header:FC<Props> = ({ className }) => {

    return (
        <header>
            <Container>
                <div className={cn("flex  justify-between items-center my-3", className)}>
                    {/* Logo */}
                    <div className="flex items-end gap-[25px]">
                        <Link href="/">
                            <Image src="/logo.svg" alt="logo" width={196} height={34} />
                        </Link>
                        
                        {/* Navbar */}
                        <div className="flex gap-4 text-light-buttons-btnLightText  dark:text-white text-[18px] font-semibold">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/search">Search</NavLink>
                            <NavLink href="/add">Add</NavLink>
                            <NavLink href="/about">About</NavLink>
                        </div>
                    </div>

                    {/* Login */}
                    <div className="flex gap-2">
                        <Button variant='default'>Login</Button>
                        <Button variant='outline' className="w-36">Register</Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}