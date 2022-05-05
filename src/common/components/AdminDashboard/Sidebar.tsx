

import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'

import Link from 'next/Link'
import Image from 'next/Image'
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

var navigationData = [
    { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: false },
    { name: 'Funcionários', href: '/admin/employees', icon: UsersIcon, current: false },
    { name: 'Categorias', href: '/admin/categories', icon: FolderIcon, current: false },
    { name: 'Produtos', href: '/admin/products', icon: CalendarIcon, current: false },
    { name: 'Encomendas', href: '/admin/orders', icon: InboxIcon, current: false },
    { name: 'Análise', href: '/admin/analytics', icon: ChartBarIcon, current: false },
];

interface SidebarProps {
    sidebarOpen : boolean,
    setSidebarOpen : (value: boolean) => void
}

const Sidebar = (props:SidebarProps) => {
    const [navigation, setNavigation] = useState<any[]>();

    useEffect(() => {
        var currentPath = window.location.pathname;

        var navigationTemp = [];

        navigationData.forEach((n) => {
            n.current = false;
            if(n.href === currentPath)
                n.current = true;
            navigationTemp.push(n);
        });

        setNavigation(navigationTemp);
    }, []);

    return (
        <div>
            <Transition.Root show={props.sidebarOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={props.setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-lpi-gray">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => props.setSidebarOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </Transition.Child>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4">
                                <Link href={"/admin"}>
                                    <img
                                        className="w-full hover:cursor-pointer"
                                        src="/icons/site_logo.png"
                                        alt="Workflow"
                                    />
                                </Link>
                            </div>
                            <nav className="mt-5 px-2 space-y-1">
                            {
                                navigation?.map((item) => (
                                    <div key={item.name}>
                                        <Link href={item.href}>
                                            <div
                                                className={classNames(
                                                    item.current ? 'bg-lpi-gray-dark text-white' : 'text-gray-300 hover:text-white',
                                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md')}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                    item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                    'mr-3 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        <Link href="/">
                        <div className="bg-lpi-red p-1 rounded w-2/3 mx-auto text-center mb-2 text-white text-sm hover:cursor-pointer">
                            Voltar à loja
                        </div>
                    </Link>

                        <div className="flex-shrink-0 flex bg-gray-700 p-4">
                            <a href="#" className="flex-shrink-0 group block">
                            <div className="flex items-center">
                                <div>
                                <img
                                    className="inline-block h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                </div>
                                <div className="ml-3">
                                <p className="text-base font-medium text-white">Francisco Giestas</p>
                                <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">Funcionário</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
            </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex-1 flex flex-col min-h-0 bg-lpi-gray">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <Link href={"/admin"}>
                                <img
                                    className="w-auto hover:cursor-pointer text-white"
                                    src="/icons/site_logo.png"
                                    alt="Projeto LPI Logo"
                                />
                            </Link>
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1">
                        { navigation?.map((item) => (
                            <div key={item.name}>
                                <Link href={item.href}>
                                    <div
                                        className={classNames(
                                            item.current ? 'bg-lpi-gray-dark text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:cursor-pointer')}
                                    >
                                        <item.icon
                                            className={classNames(
                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </div>
                                </Link>
                            </div>
                        ))}
                        </nav>
                    </div>

                    <Link href="/">
                        <div className="bg-lpi-red p-1 rounded w-2/3 mx-auto text-center mb-2 text-white text-sm hover:cursor-pointer">
                            Voltar à loja
                        </div>
                    </Link>
              
                    <div className="flex-shrink-0 flex bg-lpi-gray-dark p-4">
                        <a href="#" className="flex-shrink-0 w-full group block">
                            <div className="flex items-center">
                                <div>
                                    <img
                                        className="inline-block h-9 w-9 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">Francisco Giestas</p>
                                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">Funcionário</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;