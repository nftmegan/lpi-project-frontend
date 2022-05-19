import React, {Fragment, useEffect, useContext, useLayoutEffect, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

import { getCategories } from "../../utils/backend/category";
import { createProduct } from "../../utils/backend/product";

const ProductCreateForm = () => {
    const [formError, setFormError] = useState("");

    const { data : categories, error : categoriesError} = getCategories();

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const createProductRequest = async (event) => {
        event.preventDefault();

        if(!event.target.category.value) {
            alert("Please select a category.")
            return;
        }

        var data = JSON.stringify({
            name: event.target.name.value,
            category: event.target.category.value,
        })

        const formData = new FormData();
        formData.append('File', selectedFile);
        formData.append('name', event.target.name.value);
        formData.append('category', event.target.categoryId.value);

        var result = await createProduct(formData);
    
        var result_msg = "";
        if(result.errors) {
            result_msg = result.errors[0].msg;
            setFormError(result_msg);
        }
        else {
            result_msg = "Criado um produto"
        }

        alert(result_msg);
    }
    
    return (
        <div>
            <div className="flex-col antialiased">
                <form onSubmit={createProductRequest}>
                    <div className="space-y-6">
                        {/* TITLE */}
                        <div className="text-3xl">
                            Criar um produto
                        </div>

                        <div>
                            <div className="text-sm text-gray-500">
                                Nome
                            </div>
                            <TextField name="name" type="text"/>
                        </div>

                        <div>
                            <div className="text-sm text-gray-500">
                                Fotografias
                            </div>
                            <input onChange={changeHandler} className="form-control
                                block
                                w-full
                                p-1
                                text-base
                                font-normal
                                text-gray-700
                                bg-clip-padding
                                rounded-lg
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 bg-gray-200 focus:bg-gray-300 focus:outline-none" name="photos" type="file" id="formFileMultiple" multiple/>
                                {isFilePicked ? (
                                    <div>
                                        <p>Filename: {selectedFile.name}</p>
                                        <p>Filetype: {selectedFile.type}</p>
                                        <p>Size in bytes: {selectedFile.size}</p>
                                        <p>
                                            lastModifiedDate:{' '}
                                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                                        </p>
                                    </div>
                                ) : (
                                    <p>Select a file to show details</p>
                                )}
                        </div>

                        <div className="relative inline-flex w-full">
                            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
                            <select name="categoryId" className="flex border-b border-primary rounded-lg text-gray-600 px-2 py-1 w-full bg-gray-100 hover:border-gray-400 focus:outline-none appearance-none">
                                <option value={""}>Escolher categoria</option>
                                {
                                    categories ?
                                        categories.map((category) => {
                                            return (
                                                <option value={category._id}>{category.name}</option>
                                            );
                                        })
                                    :
                                        <></>
                                }
                            </select>
                        </div>

                        <div className="col-span-3">
                            <div className="flex items-center space-x-4">
                                <Button type="submit" text="Criar produto"/>
                                <TextLink text="Voltar" link="/"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const ProductCreate = () => {
    return (
        <div>
            <ProductCreateForm/>
        </div>
    );
}

export default ProductCreate;