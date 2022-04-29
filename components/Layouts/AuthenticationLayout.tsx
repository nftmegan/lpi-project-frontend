import React, { ReactNode, Fragment, useEffect, useContext, useState} from 'react';
import Head from 'next/head';

import Image from 'next/image'
import {Dialog, Transition} from "@headlessui/react";

import Topbar from '../Topbar';
import Footer from '../Footer';

const banner = '/images/bannerbg.png'

type Props = {
    children: ReactNode;
    title?: String;
    displayTitle?: Boolean;
}

const baseTitle = "Entrar ou criar conta"

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
                        content="Entrar ou criar conta"
                    />
                </Head>
            
                {/*<div className="flex h-screen bg-authenticationbg bg-cover bg-center">*/}
                <div className="flex h-screen bg-gray-800">
                    <div className="m-auto">
                        {/* Panel */}
                        <div className="px-16 py-12 bg-white border rounded w-full max-w-xl mx-auto shadow-2xl">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainLayout;