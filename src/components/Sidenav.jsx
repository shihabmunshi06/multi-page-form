import React from 'react'
import NavCard from './NavCard';

import navData from "../data/navData"

export default function SideNav() {
    return (
        <div className="sidenav" >
            {
                navData.map(each => {
                    return (
                        <NavCard key={each.number} {...each} />
                    )
                })
            }
        </div >


    )
}
