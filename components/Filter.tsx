import React, { useState } from 'react';
import { SeacrhLocationBox, SearchRequestNumberBox } from './SearchBox';
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';


function Filter({ title, items }: { title: any, items: any }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = (e: any) => setOpen(!open);

    function handleClick(item: any) {

    }

    return (
        <div>
            <Button className="DropDown-Button" variant="outline-primary" onClick={() => toggle(!open)} onKeyPress={() => toggle(!open)} block>
                {title}
            </Button>
            <div>{!open ?
                '' :
                <div>
                    {items}
                </div>
            }
            </div>
        </div>
    )
}

export default Filter