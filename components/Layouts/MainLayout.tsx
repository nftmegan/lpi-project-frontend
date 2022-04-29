import React, { ReactNode, Fragment, useEffect, useContext, useState} from 'react';
import Head from 'next/head';

import Image from 'next/image'
import {Dialog, Transition} from "@headlessui/react";

import Topbar from '../Topbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import CategoryMenu from '../CategoryMenu';

const banner = '/images/bannerbg.png'

type Props = {
    children: ReactNode;
    title?: String;
    displayTitle?: Boolean;
}

const baseTitle = "PROJETO LPI"

const MainLayout = ({ children, title = "", displayTitle = false}: Props) => {
    return (
        <>
            <div>
                <Head>
                    <title> { (title ? (title + " | ") : "") + baseTitle } </title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="twitter:title" content="PROJETO LPI" />
                    <meta
                        name="twitter:description"
                        content="PROJETO DE LPI - MARKETPLACE"
                    />
                </Head>
            
                <div className="flex flex-col h-screen">
                    <Topbar/>
                    <CategoryMenu/>

                    <div className="flex-grow bg-gray-200">
                        {/*<Sidebar/>*/}
                        <div className="py-8">
                            {children}
                        </div>
                    </div>
                    
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default MainLayout;