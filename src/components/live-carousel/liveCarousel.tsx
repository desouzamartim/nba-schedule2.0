"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LiveCard } from "./liveCard";

export function LiveCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const data = {
    hora: "21:30",
    transmissao: "Prime Video",
    timeCasa: "warriors",
    timeFora: "lakers"
  }

  return (
    <div className="w-full flex justify-center py-3 bg-slate-900 ">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-4xl"
      >
        <CarouselContent className="">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <LiveCard hora={data.hora} transmissao={data.transmissao} timeCasa={data.timeCasa} timeFora={data.timeFora} />
            </CarouselItem>
          ))}
        </CarouselContent>
    </Carousel>
    </div>
  )
}
