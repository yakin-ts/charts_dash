import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface BarChartProps<T> {
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
  color?: string;
  labelKey?: keyof T; // Add optional labelKey property
}

const ChartBar = <T extends Record<string, any>>({
  data,
  xKey,
  yKey,
  color = '#3f51b5'
}: BarChartProps<T>) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 300;
    const height = 200;

    svg.attr('width', width).attr('height', height);

    const x = d3
      .scaleBand()
      .domain(data.map(d => String(d[xKey])))
      .range([0, width])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => Number(d[yKey])) || 0])
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(String(d[xKey])) || 0)
      .attr('y', d => y(Number(d[yKey])))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(Number(d[yKey])))
      .attr('fill', color);
  }, [data, xKey, yKey, color]);

  return <svg ref={ref} />;
};

export default ChartBar;
