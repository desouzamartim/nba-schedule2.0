import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const invoices = [
  {
    id: '1',
    timeCasa: "Golden State Warriors",
    altCasa: 'warriors',
    timeFora: "Los Angeles Lakers",
    altFora: 'lakers',
    data: "23/01/2025 - 21:30",
    transmissao: "ESPN",
  },
  {
    id: '2',
    timeCasa: "Los Angeles Lakers",
    altCasa: 'warriors',
    timeFora: "Golden State Warriors",
    altFora: 'lakers',
    data: "23/01/2025 - 21:30",
    transmissao: "NBA League Pass",
  },
  {
    id: '3',
    timeCasa: "Golden State Warriors",
    altCasa: 'warriors',
    timeFora: "Minnesota timberwolves",
    altFora: 'lakers',
    data: "23/01/2025 - 21:30",
    transmissao: "Prime Video",
  },
  {
    id: '4',
    timeCasa: "Golden State Warriors",
    altCasa: 'warriors',
    timeFora: "Minnesota timberwolves",
    altFora: 'lakers',
    data: "23/01/2025 - 21:30",
    transmissao: "Youtube",
  }
]
 
export const BodyCard = () => {
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
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>
                  <div  className="font-medium flex items-center">
                    <img src={`../images/nbalogos/${invoice.altCasa}.png`} className="mr-3 w-8"/>
                    {invoice.timeCasa}
                  </div>
                </TableCell>
                <TableCell>
                  <div  className="flex items-center">
                    <img src={`../images/nbalogos/${invoice.altFora}.png`} className="mr-3 w-8"/>
                    {invoice.timeFora}
                  </div>
                </TableCell>
                <TableCell>{invoice.data}</TableCell>
                <TableCell className="text-right">{invoice.transmissao}</TableCell>
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
