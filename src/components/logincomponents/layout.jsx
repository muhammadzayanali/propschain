import React from "react";
import Side from './side'
import Header from './header'

const Layout = ({ children }) => {
  
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-10 bg-white" >
                <Header />
            </header>
            <div className="flex flex-row ">
                <div className="w-[300px]">
                    <aside className="hide-scroll fixed top-16 left-0 bottom-0 z-10 m-7 overflow-y-auto bg-white">
                        <Side />
                    </aside>
                </div>
                <div className="flex-1">
                    <main className="bg-[#F1F5F9] mt-20 rounded-l-lg" >
                        {children}
                    </main>
                </div>
            </div>

        </div>

    );
}
export default Layout