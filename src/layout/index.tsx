import React from 'react';
import Header from '../components/header';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            {children}
            <h1>footer</h1>
        </div>
    )
}
