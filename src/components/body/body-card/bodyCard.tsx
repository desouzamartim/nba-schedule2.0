import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


type Game = {
  id: string,
  awayTeam: string,
  awayTeamShortName: string,
  homeTeam: string,
  homeTeamShortName: string,
  gameDateTimeUTC: string,
  broadcaster: string,
};

export const BodyCard = ({ data }: { data: Game[] }) => {
  return (
    <div className="w-full max-w-4xl m-auto mt-5">
      <Card className="p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Time de casa</TableHead>
              <TableHead>Time de fora</TableHead>
              <TableHead>Data/Hora</TableHead>
              <TableHead className="text-right">Transmissão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((game) => (
              <TableRow key={game.id}>
                <TableCell>
                  <div  className="font-medium flex items-center">
                    <img src={`../images/nbalogos/${game.homeTeamShortName}.png`} className="mr-3 w-8"/>
                    {game.homeTeam}
                  </div>
                </TableCell>
                <TableCell>
                  <div  className="flex items-center">
                    <img src={`../images/nbalogos/${game.awayTeamShortName}.png`} className="mr-3 w-8"/>
                    {game.awayTeam}
                  </div>
                </TableCell>
                <TableCell>{game.gameDateTimeUTC}</TableCell>
                <TableCell className="text-right">{game.broadcaster}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="w-full flex items-center justify-center mt-5 mb-2">
          <Button variant={"ghost"} className="px-24">Exibir mais jogos</Button>
        </div>
      </Card>
    </div>
  )
};
