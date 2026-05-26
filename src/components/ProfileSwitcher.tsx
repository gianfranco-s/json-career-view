import Link from 'next/link';
import { ResumeProfile } from '@/components/types';

interface ProfileSwitcherProps {
  /** All available profiles keyed by slug, as read from cv.json. */
  profiles: Record<string, ResumeProfile>;
  /** Slug of the currently active profile, or null for the full resume. */
  activeProfile: string | null;
}

function ProfileSwitcher({ profiles, activeProfile }: ProfileSwitcherProps) {
  const pillBase = 'px-3 py-1 rounded-full text-sm border transition-colors';
  const active   = 'bg-slate-800 text-white border-slate-800';
  const inactive = 'text-slate-600 border-slate-300 hover:border-slate-500 hover:text-slate-800';

  return (
    <nav className="flex flex-wrap gap-2 justify-center py-3 print:hidden">
      <Link href="/" className={`${pillBase} ${activeProfile === null ? active : inactive}`}>
        Full
      </Link>

      {Object.entries(profiles).map(([slug, profile]) => (
        <Link
          key={slug}
          href={`/${slug}/`}
          title={profile.description}
          className={`${pillBase} ${activeProfile === slug ? active : inactive}`}
        >
          {profile.title}
        </Link>
      ))}
    </nav>
  );
}

export default ProfileSwitcher;
