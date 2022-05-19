import React, {Fragment, useEffect, useContext, useLayoutEffect, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Router from "next/router";
import Image from 'next/Image'
import Link from 'next/Link'

import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'

import { PrimaryButton, SecondaryButton } from '../UI/'

import { getProducts } from "../../utils/backend/product";
import { getCategory, getCategories } from "../../utils/backend/category";

import NotificationEmitter from "../Notifications/NotificationEmitter";
import { addProductToCartUtil } from '../../utils/cart';

type CategoryViewProps = {
    pid: string | string[];
}

const RateStarts = () => {
    return (
        <div className="flex items-center">
            <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            </div>
        </div>
    );
}

const CategoryView = (props:CategoryViewProps) => {
    const { data : products, error : productsError} = getProducts(
        [
            {
                key: "category",
                value: props.pid
            }
        ]
    );
    
    const { data : category, error : categoryError} = getCategory(props.pid);

    const { data : categories, error : categoriesError} = getCategories();
    const subCategories = categories ? categories.filter(c => { return c.parent === props.pid }) : categories;


    const { emitNotification } = NotificationEmitter();

    const addProductToCartRequest = async (productId) => {
        var data = {
            productId: productId,
            quantity: 1
        };

        await addProductToCartUtil(data);

        emitNotification("success", "Adicionado um produto ao carrinho");

        Router.reload();
    }

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
                                    <span className="text-gray-600">{products ? `Encontrado(s) ${products.length} produto(s).` : <span className="animate-pulse">{`Looking for products...`}</span>}</span>
                                </div>
                                <div className="w-full max-w-xs">
                                    <select name="category" className="flex border-b border-primary rounded-lg text-gray-600 px-2 py-1 w-full bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                        <option value={""}>Ordenar por...</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    products ? 
                                        products.map((product) => {
                                            return (
                                                <div key={product._id} className="rounded bg-white shadow">
                                                    <Link href={`/product/${product._id}`}>
                                                        <div className="hover:cursor-pointer">
                                                            <div className="relative overflow-hidden">
                                                                {
                                                                    product.discount > 0 ?
                                                                        <span class="z-10 bg-lpi-red text-white font-bold px-3 py-1 tracking-widest text-xs absolute right-0 bottom-0 rounded-l-lg">-{product.discount}%</span>
                                                                    :
                                                                        <></>    
                                                                }
                                                                <div className="p-5">
                                                                    <div className="transition-transform duration-150 ease-out hover:scale-110">
                                                                        <Image src="/images/alicate.jpg" width="900" height="900"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="px-3 py-3 space-y-3">
                                                                <div className=""> 
                                                                    <div className="text-gray-500 text-sm"> { product.category.name } </div>
                                                                    <div className="text-lg"> { product.name } </div>
                                                                    
                                                                    <div className="h-6">
                                                                        <div className="inline-block">
                                                                            <div className="flex space-x-1">
                                                                                <RateStarts/>
                                                                                <div className="text-xs text-gray-500">5 (2)</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <div className="flex px-3 pb-3 items-center">
                                                        <div className="flex-1">
                                                            {
                                                                product.discount > 0 ?
                                                                    <div className="text-sm line-through decoration-lpi-red"> { product.price }€ </div>
                                                                :
                                                                <></>
                                                            }
                                                            <div className="flex font-semibold text-lpi-red items-center">
                                                                <div className="text-xl">
                                                                    {
                                                                        product.discount > 0 ?
                                                                            (product.price - (product.price * (product.discount / 100))).toFixed(2)
                                                                        :
                                                                            (product.price).toFixed(2)
                                                                    }
                                                                </div>
                                                                <div>
                                                                    €
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex space-x-1">
                                                            <div className='flex w-10 h-10 border-2 border-lpi-red hover:border-red-700
                                                                    rounded-lg items-center justify-center hover:cursor-pointer'>

                                                                <HeartIcon className="h-7 w-7 text-red-500 hover:text-red-700"
                                                                    aria-hidden="true"/>
                                                                    
                                                            </div>
                                                            <div onClick={ () => { addProductToCartRequest(product._id) } }
                                                                className='flex w-10 h-10 bg-lpi-red hover:bg-red-700
                                                                    rounded-lg items-center justify-center hover:cursor-pointer'>

                                                                <ShoppingCartIcon className="h-7 w-7 text-white hover:text-gray-100"
                                                                    aria-hidden="true"/>
                                                                    
                                                            </div>
                                                        </div>
                                                    </div>
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