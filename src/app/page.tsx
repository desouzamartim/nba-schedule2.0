import { BodyCard } from "@/components/body/body-card/bodyCard";
import { Header } from "@/components/header/header";
import { LiveCarousel } from "@/components/live-carousel/liveCarousel";
import { Separator } from "@/components/ui/separator";
import items from "@/data/updated_schedule_nba_gmt3.json";

export default function Home() {
  const games = items;



  return (
    <div className="w-full snap-x">
      <LiveCarousel games={games}></LiveCarousel>
      <Separator ></Separator>
      <Header games={games}></Header>
      <BodyCard data={games}></BodyCard>
    </div>
  );
}
