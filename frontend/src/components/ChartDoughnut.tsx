import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface DoughnutChartProps<T> {
  data: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  colors?: string[];
}

const ChartDoughnut = <T extends Record<string, any>>({
  data,
  labelKey,
  valueKey,
  colors
}: DoughnutChartProps<T>) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie<T>().value(d => Number(d[valueKey]));
    const arc = d3.arc<d3.PieArcDatum<T>>().innerRadius(radius - 50).outerRadius(radius);

    const color = d3.scaleOrdinal<string, string>().range(
      colors || d3.schemeCategory10
    );

    g.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', d => color(String(d.data[labelKey])));
  }, [data, labelKey, valueKey, colors]);

  return <svg ref={ref} />;
};

export default ChartDoughnut;
