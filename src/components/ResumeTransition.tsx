'use client';
import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ResumeProfile } from '@/components/types';

/** Consumed by FadeSection — true while a profile navigation is in progress. */
export const FadeContext = createContext<{ fading: boolean }>({ fading: false });

interface Props {
  profiles: Record<string, ResumeProfile>;
  activeProfile: string | null;
  children: ReactNode;
}

/**
 * Wraps the resume content with:
 *   - A fade-out → fade-in transition on profile navigation.
 *   - A collapsible left-side panel listing all profile links.
 */
export default function ResumeTransition({ profiles, activeProfile, children }: Props) {
  const router = useRouter();
  const [fading, setFading] = useState(true);   // true = invisible; false = visible
  const [navOpen, setNavOpen] = useState(true);

  // Fade in on mount.
  useEffect(() => {
    const id = requestAnimationFrame(() => setFading(false));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleNavigate = useCallback((href: string) => {
    setFading(true);
    setTimeout(() => router.push(href), 300);
  }, [router]);

  const pillBase =
    'px-3 py-1.5 rounded-full text-sm border transition-colors w-full text-left cursor-pointer';
  const activeStyle  = 'bg-slate-800 text-white border-slate-800';
  const inactiveStyle =
    'bg-white text-slate-600 border-slate-300 hover:border-slate-500 hover:text-slate-800';

  return (
    <>
      {/* ── Left profile switcher ───────────────────────────────────────── */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center print:hidden">

        {/* Sliding panel */}
        <div
          style={{
            maxWidth: navOpen ? '20rem' : '0',
            opacity:  navOpen ? 1 : 0,
            transition: 'max-width 0.3s ease, opacity 0.25s ease',
            overflow: 'hidden',
          }}
        >
          <nav className="flex flex-col gap-2 p-3 w-max">
            <button
              onClick={() => handleNavigate('/')}
              className={`${pillBase} ${activeProfile === null ? activeStyle : inactiveStyle}`}
            >
              Full
            </button>

            {Object.entries(profiles).map(([slug, profile]) => (
              <button
                key={slug}
                title={profile.description}
                onClick={() => handleNavigate(`/${slug}/`)}
                className={`${pillBase} ${activeProfile === slug ? activeStyle : inactiveStyle}`}
              >
                {profile.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Toggle tab */}
        <button
          onClick={() => setNavOpen((o: boolean) => !o)}
          className="
            bg-white border border-slate-200 border-l-0
            rounded-r-lg px-1.5 py-3
            text-slate-400 hover:text-slate-700
            shadow-md transition-colors
          "
          aria-label={navOpen ? 'Hide profiles' : 'Show profiles'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transform: navOpen ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          >
            ‹
          </span>
        </button>
      </div>

      {/* ── Content — FadeSection components inside subscribe to the context ── */}
      <FadeContext.Provider value={{ fading }}>
        {children}
      </FadeContext.Provider>
    </>
  );
}
