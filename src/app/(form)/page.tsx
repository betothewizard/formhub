import Typewriter from "@/app/(form)/Typewriter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const texts = ["forms.", "websites.", "surveys."];
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-10">
      <h2 className="h-16 lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
        It&rsquo;s not just about creating <Typewriter text={texts} className="text-primary underline"></Typewriter>
      </h2>
      <div className="space-x-7">
        <Button size="home">Create forms</Button>
        <Button variant="outline" size="home">Demo</Button>
      </div>
    </div>
  );
}
