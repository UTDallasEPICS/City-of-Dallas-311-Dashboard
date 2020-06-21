import React from 'react';
import { Filter } from './Filter'

export function FiltersList(props: any) {
    let filters = props.filters.map((filterTypes: { name: string; isToggleOn: boolean; }, i: number) => {
        return <Filter key={i} name={filterTypes.name} id={i} isToggleOn={filterTypes.isToggleOn} handleInput={props.handleIn} />
    })
    return (
        <div>
            {filters}
        </div>
    )
}