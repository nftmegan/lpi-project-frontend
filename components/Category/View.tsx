import React, {Fragment, useEffect, useContext, useLayoutEffect, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

type CategoryViewProps = {
    pid: string | string[];
}

const CategoryView = (props:CategoryViewProps) => {
    const [products, setProducts] = useState([]);
    const [occurrences, setOccurrences] = useState(0);
    const [dataFetched, setDataFetched] = useState(false);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/product/', {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'GET'
            })
            const data = await response.json();

            const processedData = [];
            var occurrences = 0;
            data.forEach(p => {
                if(p.category[0] == props.pid.toString()) {
                    processedData.push(p);
                    occurrences++;
                }
                    
            });

            setProducts(processedData);
            setOccurrences(occurrences);
            setDataFetched(true);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setOccurrences(0);
        setDataFetched(false);
        getProducts();
    }, [props.pid]);

    return (
        <div>
            <div className="max-w-7xl mx-auto space-y-2">
                <div className="flex justify-between">
                    <div className="bg-red-600 max-w-sm py-1 px-4 rounded text-white shadow">
                        CATEGORIA QUE ESTAMOS
                    </div>
                    <div className="max-w-sm w-full">
                        <select name="category" className="flex border-b border-primary rounded-lg text-gray-600 px-2 py-1 w-full bg-gray-100 hover:border-gray-400 focus:outline-none appearance-none">
                            <option value={""}>Ordenar por...</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white rounded shadow divide-y-2">
                        <div className="text-center text-xl p-2">
                            Categoria 
                        </div>

                        <div className="text-center bg-gray-100">
                            Cat 1
                        </div>
                        <div className="text-center bg-gray-100">
                            Cat 2
                        </div>
                        <div className="text-center bg-gray-100">
                            Cat 3
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="space-y-4 p-2">
                            <div>
                                <span className="text-gray-600">{dataFetched ? `Found ${occurrences} products.` : <span className="animate-pulse">{`Looking for products...`}</span>}</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    dataFetched ? 
                                    products.map((product) => {
                                        return (
                                            <div key={product._id} className="rounded bg-white p-5 shadow">
                                                <Link href={`/product/${product._id}`}>
                                                    <div className="hover:cursor-pointer">
                                                        <div> <Image src="/images/alicate.jpg" width="900" height="900"/></div>
                                                        <div className="flex justify-between font-black"> 
                                                            <div> { product.name } </div>
                                                            <div> { "50$" } </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })
                                    :
                                    [...Array(8)].map((x, i) => {
                                        return (
                                            <div key={i} className="animate-pulse rounded bg-white bg-opacity-50 p-5 shadow">
                                                <div className="pt-40">
                                                    <div className="flex-1 space-y-6 py-1">
                                                        <div className="h-2 bg-gray-300 rounded"></div>
                                                        <div className="space-y-3">
                                                            <div className="grid grid-cols-3 gap-4">
                                                                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                                                                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                                                            </div>
                                                            <div className="h-2 bg-gray-300 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryView;