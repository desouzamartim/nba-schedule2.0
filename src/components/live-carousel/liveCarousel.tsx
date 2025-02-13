"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LiveCard } from "./liveCard";

type Game = {
  id: string;
  awayTeam: string;
  awayTeamShortName: string;
  homeTeam: string;
  homeTeamShortName: string;
  gameDateTimeUTC: string;
  broadcaster: string;
};

export function LiveCarousel({ games }: { games: Game[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  const filterGames = (games: Game[]) => {
    const now = new Date();
    const agora = new Date(now.getTime() - 3 * 60 * 60 * 1000);
    const twoHoursAndThirtyMinutesAgo = new Date(now.getTime() - 5 * 60 * 60 * 1000);
  
    return games.filter((game) => {
      const gameTime = new Date(game.gameDateTimeUTC);
      console.log(agora)
      return gameTime < agora && gameTime > twoHoursAndThirtyMinutesAgo;
    });
  };

  const filteredGames = filterGames(games);

  function formatGameDateTime(gameDateTimeUTC: string): string {
    const date = new Date(gameDateTimeUTC);
  
    const formattedDate = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });
  

    const formattedTime = date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  
    return `${formattedDate} - ${formattedTime}`;
  }

  return (
    <div className="w-full flex justify-center py-3 bg-slate-900">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-4xl"
      >
        <CarouselContent>
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <CarouselItem key={game.id} className="md:basis-1/2 lg:basis-1/3">
                <LiveCard
                  hora={ formatGameDateTime(game.gameDateTimeUTC)}
                  transmissao={game.broadcaster}
                  timeCasa={game.homeTeamShortName}
                  timeFora={game.awayTeamShortName}
                />
              </CarouselItem>
            ))
          ) : (
            <div className="text-white text-center w-full py-6">
              Nenhum jogo ao vivo no momento.
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
