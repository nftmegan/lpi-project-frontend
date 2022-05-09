import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Link from 'next/Link'
import Image from 'next/Image'

import { ChevronDownIcon } from '@heroicons/react/solid'

import ModalLayout from '../../Layouts/ModalLayout';
import NewProductForm from './NewProductForm';

import { getProducts } from "../../../utils/backend/product";

const ProductsPage = () => {
    const { data : products, error : productsError} = getProducts();
    const [filteredProducts, setFilteredProducts] = useState<any[]>(products); /*products ? products.filter(c => { return true }) : products*/ 

    const [sortingBy, setSortingBy] = useState<string>("name");

    const [newProductModalOpen, setNewProductModalOpen] = useState(false);

    const sortBy = (newSort) => {
        var trimSort = newSort.charAt(0) === '!' ? newSort.substring(1) : newSort;
        var _trimSort = sortingBy.charAt(0) === '!' ? sortingBy.substring(1) : sortingBy;
        
        
        console.log(trimSort, _trimSort);
        if(trimSort === _trimSort)
            setSortingBy(sortingBy.charAt(0) === '!' ? sortingBy.substring(1) : "!" + sortingBy);
        else
            setSortingBy(newSort);

            console.log(newSort, sortingBy);
    }

    useEffect(() => {
        if(filteredProducts) {
            if(sortingBy === "name")
                setFilteredProducts(filteredProducts.sort((a, b) => a.name.localeCompare(b.name)));
            else if(sortingBy === "!name")
                setFilteredProducts(filteredProducts.sort((a, b) => b.name.localeCompare(a.name)));
            else if(sortingBy === "price")
                setFilteredProducts(filteredProducts.sort((a, b) => a.price.localeCompare(b.price)));
            else if(sortingBy === "!price")
                setFilteredProducts(filteredProducts.sort((a, b) => b.price.localeCompare(a.price)));
        }
    }, [sortingBy]);

    return (
        <div>
            <ModalLayout open={newProductModalOpen} setOpen={setNewProductModalOpen}>
                <NewProductForm setOpen={setNewProductModalOpen}/>
            </ModalLayout>
            
            <div className="pl-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Produtos</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Lista de produtos na base de dados.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            onClick={() => {setNewProductModalOpen(true)}}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Adicionar produto
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <div className="group inline-flex hover:cursor-pointer" onClick={() => {sortBy("name")}}>
                                                Name
                                                <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <div className="group inline-flex hover:cursor-pointer" onClick={() => {sortBy("description")}}>
                                                Descrição
                                                <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <div className="group inline-flex hover:cursor-pointer" onClick={() => {sortBy("email")}}>
                                                Email
                                                <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <div className="group inline-flex hover:cursor-pointer" onClick={() => {sortBy("price")}}>
                                                Preço
                                                <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {filteredProducts?.map((product, productIdx) => (
                                        <tr key={product._id} className={productIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {product.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.role}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Editar<span className="sr-only">, {product.name}</span>
                                            </a>
                                        </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;