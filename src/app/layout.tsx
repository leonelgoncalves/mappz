import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import React from 'react';
import MappzProvider from '@/app/providers';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link id="theme-css" href={`/themes/bootstrap4-light-blue/theme.css`} rel="stylesheet"></link>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                  crossOrigin="" />

        </head>
        <body>
        <MappzProvider>
            {children}
        </MappzProvider>
        </body>
        </html>
    );
}
