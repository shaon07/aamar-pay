import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <h1>header</h1>
            {children}
            <h1>footer</h1>
        </div>
    )
}
