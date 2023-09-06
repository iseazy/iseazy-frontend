import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MemoryApp } from './MemoryApp';

import './styles.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ReactQueryDevtools />
            <BrowserRouter>
                <MemoryApp />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
