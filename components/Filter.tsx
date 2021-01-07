import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
//import { propTypes } from 'react-bootstrap/esm/Image';


function Filter({ title, items }: { title: any, items: any }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState(['All']);
    const toggle = (e: any) => setOpen(!open);

    function handleClick(item: any) {
        if (!selection.some((current: any) => current.title === item.title)) {
            setSelection([item]);
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                (current: any) => current.title !== item.title
            );
            setSelection([...selectionAfterRemoval]);
        }
    }

    function inSelection(item: any) {
        if (selection.find((current: any) => current.title == item.title)) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <Button className="DropDown-Button" variant="outline-primary" onClick={() => toggle(!open)} onKeyPress={() => toggle(!open)} block>
                {title}
            </Button>
            <div >{!open ? //TODO make this div have a scroll bar
                '' :
                <ul style={{ listStyleType: 'none', alignContent: 'left', border: '1px solid' }}>
                    {items.map((item: any) => (
                        <li className="item-button" key={item.title} style={{ textAlign: 'left', }}>
                            <input type="radio" name={title} id={item.title} defaultChecked={inSelection(item)}
                                onChange={() => handleClick(item)} style={{ marginLeft: -20 }} />
                            <label style={{ overflowWrap: 'break-word', marginLeft: 3 }}> {item.title}</label>
                        </li>
                    ))}
                </ul>
            }
            </div>
        </div>
    )
}

export default Filter