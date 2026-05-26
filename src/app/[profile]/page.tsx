import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Resume from '@/components/Resume';
import { fetchCV, filterCV } from '@/lib/cv';

interface Props {
  params: { profile: string };
}

/**
 * Derives static routes from cv.json's `resumeProfiles` keys.
 *
 * If `resumeProfiles` is absent (cv.json not yet updated) or the fetch
 * fails, we emit a single sentinel slug `_` so the build doesn't error
 * on an empty generateStaticParams.  The page itself calls notFound()
 * for that slug, so no page is actually served.
 */
export async function generateStaticParams() {
  try {
    const data = await fetchCV();
    const slugs = Object.keys(data.resumeProfiles ?? {});
    if (slugs.length > 0) {
      return slugs.map((slug) => ({ profile: slug }));
    }
  } catch {
    // Network unavailable during build — fall through to sentinel.
  }
  return [{ profile: '_' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.profile === '_') return {};
  const data = await fetchCV();
  const profile = data.resumeProfiles?.[params.profile];
  if (!profile) return {};
  return {
    title: `${data.basics.name} — ${profile.title}`,
    description: profile.description,
  };
}

export default async function ProfilePage({ params }: Props) {
  if (params.profile === '_') notFound();

  const data = await fetchCV();
  const profile = data.resumeProfiles?.[params.profile];
  if (!profile) notFound();

  const filtered = filterCV(data, params.profile);

  return (
    <div>
      <Resume data={filtered} activeProfile={params.profile} />
    </div>
  );
}
