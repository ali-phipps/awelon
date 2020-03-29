import React from "react";
import Link from "next/link";


const NavBar = (props) => {
    return (
        <div>
            <Link href="/">
                <a>home</a>
            </Link>

            <Link href="/inside">
                <a>inside</a>
            </Link>

        </div>
    )
}

export default NavBar