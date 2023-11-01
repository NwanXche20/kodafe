import Hero from "@/views/homepage/Hero";
import MainContent from "@/views/homepage/MainContent";
import VideoContent from "@/views/homepage/VideoContent";

export default function Home() {
  return (
    <>
      <header className="relative">
        <Hero />
      </header>

      <main className="bg-white py-20 lg:pb-28 space-y-24 lg:space-y-36">
        <MainContent />
        <VideoContent />
      </main>
    </>
  );
}
