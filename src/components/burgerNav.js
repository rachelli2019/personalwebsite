import React, { useState, useRef } from 'react';
import Burger from "./burger/burger"
import Menu from "./burger/menu"
import { useOnClickOutside } from './hooks'

function BurgerNav(){
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));  
    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen}/>
        </div>
    )
}

export default BurgerNav;