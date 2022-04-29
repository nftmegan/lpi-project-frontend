


import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Link from 'next/Link'
import Image from 'next/Image'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    const getCategories = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/category/', {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'GET'
            })
            const data = await response.json();
            
            setCategories(data);
            setDataFetched(true);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setDataFetched(false);
        getCategories();
    }, []);

    return (
        <div>
            <div className="bg-gray-700">
                <div className="text-center flex items-center mx-auto justify-center divide-x divide-gray-800">
                    {
                        dataFetched ?
                        categories.map((category) => {
                            return (
                                <div key={category._id} className="hover:bg-gray-600 hover:cursor-pointer shadow-2xl w-32 text-sm">
                                    <Link href={`/category/${category._id}`}>
                                        <div className="p-2">
                                            <div className="w-12 p-1 mx-auto">
                                                <Image
                                                    src={`/icons/category_icon.png`}
                                                    alt={"cart"}
                                                    width={"100%"}
                                                    height={"100%"}
                                                    layout="responsive"
                                                />
                                            </div>
                                            <span className="text-gray-100">{`${category.name}`}</span>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                        :
                        [...Array(12)].map((x, i) => {
                            return (
                                <div key={i} className="shadow-2xl w-32 text-sm animate-pulse">
                                    <div className="p-2 space-y-2">
                                        <div className="w-12 p-1 mx-auto opacity-40">
                                            <Image
                                                src={`/icons/category_icon.png`}
                                                alt={"cart"}
                                                width={"100%"}
                                                height={"100%"}
                                                layout="responsive"
                                            />
                                        </div>
                                        <div className="w-2/3 mx-auto space-y-1">
                                            <div className="h-1 bg-gray-500 rounded"></div>
                                            <div className="h-1 bg-gray-500 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoryMenu;