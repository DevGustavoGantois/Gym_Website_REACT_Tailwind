import React from 'react';

//import data
import {nav} from '../data';


export function Nav() {
    return (
        <nav className="hidden lg:flex">
            <ul className='flex text-white gap-x-8'>
                {nav.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className='hover:text-primary-200 transition' href={item.href}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}