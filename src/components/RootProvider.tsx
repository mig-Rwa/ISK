'use client';
import ThemeRegistry from './ThemeRegistry';
import { ReactNode } from 'react';

export default function RootProvider({ children }: { children: ReactNode }) {
  return <ThemeRegistry>{children}</ThemeRegistry>;
}
