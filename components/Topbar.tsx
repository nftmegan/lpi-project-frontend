
import React, {Fragment, useEffect, useLayoutEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";
import Link from 'next/Link'
import Image from 'next/Image'

const topMenu = [
    {
        id: 1,
        name: "Empresa",
        href: "/#"
    },
    {
        id: 2,
        name: "Contactos",
        href: "/#"
    },
    {
        id: 3,
        name: "Apoio ao Cliente",
        href: "/#"
    },
    {
        id: 4,
        name: "Recrutamento",
        href: "/#"
    },
]

const Topbar = () => {
    return (
        <div className="">
            <div className="bg-red-700 px-4 text-sm">
                <div className="justify-between text-white font-bold max-w-7xl mx-auto flex items-center">
                    <div className="flex">
                        {
                            topMenu.map((menuLink) => {
                                return (
                                    <div key={menuLink.id} className="hover:bg-red-800 py-2 px-3">
                                        <Link href={`${menuLink.href}`}>
                                            <a className="text-white hover:text-gray-200 font-black hover:underline" key={menuLink.id}> {menuLink.name}</a>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="bg-gray-900 bg-opacity-40 rounded-lg py-1 px-2 space-x-2">
                        <span className="text-red-300 font-black">PAINEL ADMIN:</span>
                        <Link href="/category/create">
                            <a className="text-white text-xs hover:text-blue-500 hover:underline"> · CRIAR CATEGORIA</a>
                        </Link>
                        <Link href="/product/create">
                            <a className="text-white text-xs hover:text-blue-500 hover:underline"> · CRIAR PRODUTO</a>
                        </Link>
                    </div>
                    
                </div>
            </div>
            
            <div className="bg-gray-800 py-6 px-4">
                <div className="space-x-4 text-white font-bold max-w-7xl mx-auto justify-between flex items-center">

                    <div className="grid grid-cols-4 gap-10 items-center mx-auto w-full">
                        <div className="col-span-1">
                            <Link href="/#">
                                <div className="w-44 hover:cursor-pointer">
                                    <Image
                                        src={`/icons/site_logo.png`}
                                        alt={"cart"}
                                        width={"100%"}
                                        height={"50%"}
                                        layout="responsive"
                                    />
                                </div> 
                            </Link>
                        </div>
                        <div className="col-span-2">
                            <div className="bg-gray-700 rounded-lg shadow p-1 flex">
                                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Procurar..." aria-label="Barra de pesquisa"/>
                                <div className="bg-primary hover:bg-primary-hover hover:cursor-pointer rounded-lg shadow p-2 text-white text-center">
                                    <span>
                                        Procurar
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex space-x-8 items-center w-full justify-end">
                                <div className="p-1 hover:bg-gray-700 rounded-full hover:cursor-pointer">
                                    <div className="w-10">
                                        <Image
                                            src={`/icons/cart.png`}
                                            alt={"cart"}
                                            width={"100%"}
                                            height={"100%"}
                                            layout="responsive"
                                        />
                                    </div> 
                                </div>

                                <div className="flex items-center hover:bg-gray-700 hover:cursor-pointer space-x-2 p-1 rounded-full">
                                    <div className="w-10">
                                        <Image
                                            src={`/icons/clientarea.png`}
                                            alt={"cart"}
                                            width={"100%"}
                                            height={"100%"}
                                            layout="responsive"
                                        />
                                    </div>
                                    <span className="text-white text-sm">{"Área Cliente"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;