import React, {Fragment, useEffect, useContext, useLayoutEffect, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

import { getProducts } from "../../utils/backend/product";
import { getCategory, getCategories } from "../../utils/backend/category";

type CategoryViewProps = {
    pid: string | string[];
}

const CategoryView = (props:CategoryViewProps) => {
    const { data : products, error : productsError} = getProducts();
    const filteredProducts = products ? products.filter(p => { return p.category === props.pid }) : products;
    
    const { data : category, error : categoryError} = getCategory(props.pid);

    const { data : categories, error : categoriesError} = getCategories();
    const subCategories = categories ? categories.filter(c => { return c.parent === props.pid }) : categories;

    return (
        <div>
            <div className="space-y-2">
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <div className="bg-lpi-red w-full py-1 px-4 rounded-t-lg text-white shadow flex items-center h-10 justify-between">
                            <div className="text-xl w-full">
                                { category ? category.name : <div className="animate-pulse h-4 bg-opacity-60 bg-lpi-gray-light rounded w-full"></div> }
                            </div>

                            <div className="w-14">
                                { category ?
                                    category.parent != null ?
                                        <div className="bg-red-800 hover:bg-red-700 px-2 rounded text-center text-xs">
                                            <Link href={`/category/${category.parent}`}>
                                                {"Voltar"}
                                            </Link>
                                        </div>
                                    :
                                        <div></div>
                                :
                                    <div className="animate-pulse h-4 bg-opacity-60 bg-lpi-gray-light rounded w-full"></div>
                                }
                            </div>
                        </div>
                        <div className="bg-white rounded-b-lg shadow">
                            {
                                subCategories ? 
                                    <div className="py-1 divide-y">
                                        {
                                            subCategories.map((subCategory) => {
                                                return (
                                                    <Link href={`/category/${subCategory._id}`}>
                                                        <div key={subCategory._id} className="text-left px-4 bg-white hover:bg-lpi-gray-light hover:cursor-pointer">
                                                            { subCategory.name }
                                                        </div>
                                                    </Link>
                                                );
                                            })
                                        }
                                    </div>
                                :
                                    <div></div>
                            }
                        </div>
                    </div>
                    
                    <div className="col-span-3">
                        <div className="space-y-4 p-2">
                            <div className="flex justify-between">
                                <div>
                                    <span className="text-gray-600">{filteredProducts ? `Found ${filteredProducts.length} products.` : <span className="animate-pulse">{`Looking for products...`}</span>}</span>
                                </div>
                                <div className="w-full max-w-xs">
                                    <select name="category" className="flex border-b border-primary rounded-lg text-gray-600 px-2 py-1 w-full bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                        <option value={""}>Ordenar por...</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    filteredProducts ? 
                                    filteredProducts.map((product) => {
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