import Resume from "@/components/Resume";
import ResumeData from "@/components/types";

const CV_URL = 'https://raw.githubusercontent.com/gianfranco-s/gianfranco-s/main/cv.json'

async function getCV(): Promise<ResumeData> {
  const res = await fetch(CV_URL, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Failed to fetch CV: ${res.status}`)
  return res.json()
}

export default async function Home() {
  const data = await getCV()
  return (
    <div>
      <Resume data={data} />
    </div>
  )
}
