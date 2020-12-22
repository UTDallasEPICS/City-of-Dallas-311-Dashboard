import React, { useImperativeHandle, useState } from 'react';
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';


function Filter({ title, items }: { title: any, items: any }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = (e: any) => setOpen(!open);

    function handleClick(item: never) {
        if (!selection.some(current => current === item)) {
            setSelection([item]);
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current !== item
            );
            setSelection([...selectionAfterRemoval]);
        }
        console.log(selection);
    }

    return (
        <div>
            <Button className="DropDown-Button" variant="outline-primary" onClick={() => toggle(!open)} onKeyPress={() => toggle(!open)} block>
                {title}
            </Button>
            <div>{!open ?
                '' :
                <ul style={{ listStyleType: 'none', alignContent: 'left' }}>
                    {items.map((item: any) => (
                        <li className="item-button" key={item.title} style={{ textAlign: 'left' }}>
                            <input type="radio" name={title} defaultChecked={selection === item.title ? true : false} onClick={() => handleClick(item)} />
                            <label>{item.title}</label>
                        </li>
                    ))}
                </ul>
            }
            </div>
        </div>
    )
}

export default Filter