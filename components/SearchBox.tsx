import React from 'react';

export function SearchLocationBox(props: any) {
    return (
        <div>
            <input onChange={props.handleInput} type="text" placeholder="Search Location" />
        </div>
    )
}

export function SearchRequestNumberBox(props: any) {
    return (
        <div>
            <input onChange={props.handleInput} type="text" placeholder="Search Request Number" />
        </div>
    )
}