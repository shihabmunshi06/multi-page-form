import React from 'react'
import NavCard from './NavCard';

let navData = [
    {
        number: 1,
        details: "your info",
        path: ""
    },
    {
        number: 2,
        details: "select plan",
        path: "plan"
    },
    {
        number: 3,
        details: "add-ons",
        path: "addon"
    },
    {
        number: 4,
        details: "summary",
        path: "summary"
    },
]

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
