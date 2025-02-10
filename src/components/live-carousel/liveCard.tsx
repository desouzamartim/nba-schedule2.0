import { Radio } from "lucide-react";
import { Card, CardContent } from "../ui/card";

type Props = {
  hora: string,
  transmissao: string,
  timeCasa: string,
  timeFora: string
}

export const LiveCard = ({ hora, transmissao, timeCasa, timeFora }: Props) => {

  return (
    <Card className="">
      <CardContent className="flex items-center py-2 justify-center">
        <div className="bg-red-600 rounded-sm flex items-center px-1.5 py-0.5 mr-3">
          <Radio className="size-4"/>
        </div>
        <div className="">
          <div className="flex items-center mb-1">
            <div className="">
              <img src={`../images/nbalogos/${timeCasa}.png`} alt="nba-logo" className="w-6"/> 
            </div>
            <span className="mx-2 text-xs text-slate-500">vs</span>
            <div className="">
              <img src={`../images/nbalogos/${timeFora}.png`} alt="nba-logo" className="w-6"/> 
            </div>
          </div>
          <div className="text-xs text-slate-400">{transmissao} - {hora}</div>
        </div>
      </CardContent>
    </Card>
  )
};
