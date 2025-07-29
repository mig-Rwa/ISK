// src/components/ThemeRegistry.tsx
// Server Component – no "use client"

import * as React from 'react';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { theme } from '@/theme';
import Navbar from '@/components/Navbar';

interface Props {
  children: React.ReactNode;
}

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function ThemeRegistry({ children }: Props) {
  const [emotionCache] = React.useState(createEmotionCache);

  // Inject the Emotion styles generated during the server render into the HTML
  useServerInsertedHTML(() => {
    const { key, inserted } = emotionCache;
    let styles = '';
    let ids: string[] = [];

    Object.entries(inserted).forEach(([id, css]) => {
      if (typeof css === 'boolean') return; // skip registered ids
      styles += css;
      ids.push(id);
    });

    return (
      <style
        data-emotion={`${key} ${ids.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={emotionCache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
