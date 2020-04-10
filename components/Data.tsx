import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';

interface DataProps {}

export const Data: React.FC<DataProps> = ({}) => {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => {
          return enter.append('circle');
        },
        (update) => {
          return update.attr('class', 'updated');
        },
        (exit) => {
          exit.remove();
        }
      )
      .attr('r', (value) => {
        return value;
      })
      .attr('cx', (value) => {
        return value * 2;
      })
      .attr('cy', (value) => {
        return value * 2;
      })
      .attr('stroke', 'red');
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value <= 35))}>
        Filter Data
      </button>
      <button onClick={() => setData([...data, Math.random() * 100])}>
        Add Data
      </button>
    </React.Fragment>
  );
};
