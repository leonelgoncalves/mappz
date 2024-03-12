'use client';
import { LayoutProvider } from '@/layout/context/layoutContext';
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


export default function MappzProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());
    const client = new ApolloClient({
        uri: 'https://countries.trevorblades.com/graphql',
        cache: new InMemoryCache()
    });
    return <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <LayoutProvider>
                    {children}
                </LayoutProvider>
            </PrimeReactProvider>
        </QueryClientProvider>
    </ApolloProvider>;
}
