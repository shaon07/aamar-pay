import React from 'react';
import Header from '../components/header';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <Header />
            {children}
        </div>
    )
}
