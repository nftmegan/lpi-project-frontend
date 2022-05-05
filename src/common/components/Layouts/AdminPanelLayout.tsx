import React, { ReactNode, Fragment, useEffect, useContext, useState} from 'react';

import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'

import Sidebar from '../AdminDashboard/Sidebar';

type Props = {
    children: ReactNode;
    title?: String;
}

const AdminPanelLayout = ({children, title = "Dashboard"} : Props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className="bg-lpi-gray-light h-screen">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex">
                        <div className="py-6 space-y-6 w-full">
                            <div className="max-w-7xl px-4">
                                <h1 className="text-2xl font-semibold text-gray-900"> {title} </h1>
                            </div>
                            <div className="max-w-7xl px-8">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminPanelLayout;