"use client";
import { Card, Carousel } from "@/components/projects/apple-cards-carousel";
import { data } from "@/components/projects/Data";


export default function AllProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  console.log(data[0]);

  return (
    <div className="w-full h-full pt-8">
      <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      
      <div className="max-w-7xl mx-auto mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-amber-900 dark:border-amber-400/30 dark:bg-amber-900/20 dark:text-amber-100">
        <p className="text-sm md:text-base">
          This section is a work in progress — I&apos;m actively polishing the full projects page. In the meantime, here&apos;s a quick overview of what I&apos;ve built.
        </p>
      </div>
      {/* <Carousel items={cards} /> */}
    </div>
  );
}
