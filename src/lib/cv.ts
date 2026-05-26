import fs from 'fs/promises';
import ResumeData from '@/components/types';

const CV_URL =
  'https://raw.githubusercontent.com/gianfranco-s/gianfranco-s/main/cv.json';

export async function fetchCV(): Promise<ResumeData> {
  const localPath = process.env.CV_LOCAL_PATH;
  if (localPath) {
    const raw = await fs.readFile(localPath, 'utf-8');
    return JSON.parse(raw);
  }
  const res = await fetch(CV_URL);
  if (!res.ok) throw new Error(`Failed to fetch CV: ${res.status}`);
  return res.json();
}

/**
 * Returns a copy of data filtered for a given profile slug.
 *
 * Work entries:
 *   - shown when `showInProfiles` is absent / empty (universal)
 *   - shown when `showInProfiles` includes the slug
 */
export function filterCV(data: ResumeData, slug: string): ResumeData {
  const filteredWork = data.work.filter((w) => {
    if (!w.showInProfiles || w.showInProfiles.length === 0) return true;
    return w.showInProfiles.includes(slug);
  });

  return { ...data, work: filteredWork };
}
