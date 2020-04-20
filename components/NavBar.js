import React from "react";
import Link from "next/link";


const NavBar = () => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>

            <Link href="/inside">
                <a>Inside</a>
            </Link>

            <Link href="/local_area">
                <a>Local Area</a>
            </Link>

        </div>
    )
}

export default NavBar