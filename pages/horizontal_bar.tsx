/*import files*/
import React, {useEffect, useRef, useState} from 'react'
import {select, Selection} from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale'
import { max } from 'd3-array'
import randomstring from 'randomstring'


/* sample data */
let initialData = [

    {
        name: 'a',
        units: 32,
    },
    {
        name: 'b',
        units: 67,
    },
    {
        name: 'c',
        units: 81,
    },
    {
        name: 'd',
        units: 38,
    },
    {
        name: 'e',
        units: 28,
    },
    {
        name: 'f',
        units: 59,
    },
]


const dimensions = {
    width: 900,
    height: 600
}




export const App: React.FC = () => {

    /* vertical bar chart element */
    const ref = useRef<SVGSVGElement | null>(null)
    const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null, 
    unknown, 
    null, 
    undefined 
    >> (null)

    const [data, setData] = useState(initialData)


    let y = scaleLinear()
        .domain([0,max(data, d=>d.units)!])
        .range([dimensions.height, 0])

    let x = scaleBand()
        .domain(data.map(d=>d.name))
        .range([0, dimensions.width])
        .paddingInner(0.05)

    useEffect(() => {
        if (!selection){
            setSelection(select(ref.current))
        }
        else{
            selection
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', x.bandwidth)
                .attr('height', d => dimensions.height -y(d.units))
                .attr('x', d=>x(d.name)!)
                .attr('y', d=>y(d.units))
                .attr('fill', 'blue')
        }
    }, [selection])

    useEffect(() => {
        if(selection) {
            y = scaleLinear()
            .domain([0,max(data, d=>d.units)!])
            .range([dimensions.height, 0])
    
           x = scaleBand()
            .domain(data.map(d=>d.name))
            .range([0, dimensions.width])
            .paddingInner(0.05)

            const rects = selection.selectAll('rect').data(data)

            rects   
                .exit()
                .remove()
                
            rects
            .attr('width', x.bandwidth)
            .attr('height', d => dimensions.height -y(d.units))
            .attr('x', d=>x(d.name)!)
            .attr('y', d=>y(d.units))
            .attr('fill', 'blue')

            rects   
                .enter()
                .append('rect')
                .attr('width', x.bandwidth)
            .attr('height', d => dimensions.height -y(d.units))
            .attr('x', d=>x(d.name)!)
            .attr('y', d=>y(d.units))
            .attr('fill', 'blue')

        }
    }, [data])


    const addRandom = () => {
        const dataToBeAdded = {
            name:randomstring.generate(10),
            units: Math.floor(Math.random()*(80) * 20)
        }

        setData([...data, dataToBeAdded])
    }
    
    const removeLast = () => {
        if(data.length === 0) {
            return
        }
        const slicedData = data.slice(0, data.length-1)
        setData(slicedData)
    }



    /* return  function */
    return (
        <div>
            <svg 
            ref={ref} 
            width={dimensions.width} 
            height={dimensions.height}
            />
            <button onClick={addRandom}>Add Random</button>
            <button onClick={removeLast}>Remove Last</button>
            
        </div>
    )
}

export default App