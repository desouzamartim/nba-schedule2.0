import { BodyCard } from "@/components/body/body-card/bodyCard";
import { Header } from "@/components/header/header";
import { LiveCarousel } from "@/components/live-carousel/liveCarousel";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full snap-x">
      <LiveCarousel></LiveCarousel>
      <Separator ></Separator>
      <Header></Header>
      <BodyCard></BodyCard>
    </div>
  );
}
