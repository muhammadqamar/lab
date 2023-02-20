import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

import "./style.scss"

const Layout = ({children}) => {
    return (
        <div className="">
            <Navbar />
            <div className="flex gap-[20px] bg-hemaSecondary h-full ">
                <Sidebar />
                <div className="hemergy-container pt-[35px] pb-[25px]">
                {children}
                </div>
            </div>
        </div>
   )
}
export default Layout