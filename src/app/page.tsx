import Resume from "@/components/Resume";
import { fetchCV } from "@/lib/cv";

export default async function Home() {
  const data = await fetchCV();
  return (
    <div>
      <Resume data={data} activeProfile={null} />
    </div>
  );
}
