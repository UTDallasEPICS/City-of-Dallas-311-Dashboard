import React from 'react';

export function Filter(props: any) {
    return (
        <div>
            <p style={{ width: 200, textAlign: 'left' }}>
                <input className="boxBoys" onClick={props.handleInput.bind(props.handleInput, props.id)} type="checkbox" color="primary" defaultChecked={props.isToggleOn} />
                <label>
                    {props.name}
                </label>

            </p>
        </div >
    )
}
