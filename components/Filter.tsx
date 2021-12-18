import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import onClickOutside from 'react-onclickoutside';



function Filter({ title, items }: { title: any, items: any }) {
    const [open, setOpen] = useState(false); //button open or closed
    const [selection, setSelection] = useState(['All']);//this is what has been selected, All by default
    const toggle = (e: any) => setOpen(!open);
    //Filter['handleClickOutside_' + title] = () => setOpen(false);//This is for the onClickOutside

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
            <div >{!open ?
                '' :
                <ul style={{ listStyleType: 'none', alignContent: 'left', border: '1px solid', height: 360, overflowY: 'auto' }}>
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
/*const clickOutsideConfig = {
    handleClickOutside: ({ props }) => Filter['handleClickOutside_' + props.title]
};

export default onClickOutside(Filter, clickOutsideConfig);
*/
export default Filter;