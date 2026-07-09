"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A radar chart";

type RadarPoint = {
  status: string;
  value: number;
};

const chartConfig = {
  value: {
    label: "value",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

type ChartRadarProps = {
  data: RadarPoint[];
};

export function ChartRadar({ data }: ChartRadarProps) {
  return (
    <div className="rounded-4xl border p-5">
      <div className="items-center">
        <div>Stats</div>
      </div>
      <div className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-[200px]"
        >
          <RadarChart data={data}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="status" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </div>
      <div className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">HP</TableCell>
                <TableCell>Health</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">AG</TableCell>
                <TableCell>Agility</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">STR</TableCell>
                <TableCell>Strength</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
