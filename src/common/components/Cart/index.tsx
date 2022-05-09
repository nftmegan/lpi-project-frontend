


import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Link from 'next/Link'
import Image from 'next/Image'

import { getCategories } from "../../utils/backend/category";

import { PrimaryButton } from "../UI";

const products = [
    {
        _id: 1,
        name: "Corsair Vengeance RGB PRO Black - Módulo de memória DDR4-RAM 3600 MHz"
    },
    {
        _id: 2,
        name: "Lian-Li Caixa PC preta O11D Mini -X O11D Mini -X Torre Midi 1 unidade"
    }
]

const CartPage = () => {
    /*
    const { data : categories, error : categoriesError} = getCategories();
    const filteredCategories = categories ? categories.filter(c => { return c.parent === null }) : categories;
    */

    return (
        <div className="space-y-4">
            <div className="text-3xl">
                Carrinho de compras
            </div>
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-4 rounded-lg">
                    <div className="">
                        {
                            products ?
                                products.map((product) => {
                                    return (
                                        <div key={product._id} className="shadow-lg border w-full text-sm p-6 bg-white">
                                            <div className="flex gap-6">
                                                <div className="col-span-1">
                                                    <div className="w-24 p-1">
                                                        <img
                                                            src={`/images/alicate.jpg`}
                                                            alt={"cart"}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="text-black text-sm">{`${product.name}`}</div>

                                                    <div className="text-black text-lg">{`€82,24 (99,51 € IVA incluído)`}</div>

                                                    <div className="text-sm text-green-500"> Em stock </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            :
                            <></>
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="bg-white p-6 space-y-4 w-full shadow-lg">
                        <h1 className="text-xl text-gray-900">Resumo da encomenda</h1>
                        <div className="divide-y">
                            <div className="flex justify-between py-4">
                                <p className="text-sm text-gray-500">
                                    Sub-total
                                </p>
                                <p className="text-sm text-gray-700 font-bold">
                                    9$
                                </p>
                            </div>
                            <div className="flex justify-between py-4">
                                <p className="text-sm text-gray-500">
                                    Portes estimados
                                </p>
                                <p className="text-sm text-gray-700 font-bold">
                                    12$
                                </p>
                            </div>
                            <div className="flex justify-between py-4">
                                <p className="text-sm text-gray-500">
                                    IVA
                                </p>
                                <p className="text-sm text-gray-700 font-bold">
                                    9$
                                </p>
                            </div>
                            <div className="flex justify-between py-4">
                                <p className="text-gray-500">
                                    Total da encomenda
                                </p>
                                <p className="text-gray-700 font-bold">
                                    32$
                                </p>
                            </div>
                        </div>
                        <Link href="/checkout">
                            <PrimaryButton type="button" text="Finalizar encomenda"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;