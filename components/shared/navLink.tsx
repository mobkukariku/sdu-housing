'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
    href: string;
    children: React.ReactNode;
}

export const NavLink: FC<Props> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <span className={`${isActive ? ' underline left decoration-dark-buttons-btnBlue decoration-2 underline-offset-[6px]' : ''}`}>
                {children}
            </span>
        </Link>
    );
};
