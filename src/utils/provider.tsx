'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense } from 'react';

import { makeServer } from '@/services/mirage';
import { queryClient } from '@/services/queryClient';
if (process.env.NODE_ENV === 'development') {
  makeServer();
}
function Providers({ children }: React.PropsWithChildren) {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default Providers;
