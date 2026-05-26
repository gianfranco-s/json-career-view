'use client';
import { useContext, type ReactNode } from 'react';
import { FadeContext } from '@/components/ResumeTransition';

/**
 * Wrap any section that changes between profiles.
 * Fades out before navigation and fades in on mount.
 * Sections NOT wrapped stay visible throughout the transition.
 */
export default function FadeSection({ children }: { children: ReactNode }) {
  const { fading } = useContext(FadeContext);
  return (
    <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
      {children}
    </div>
  );
}
