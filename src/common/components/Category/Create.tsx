import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

import { getCategories, createCategory } from "../../utils/backend/category";

const CategoryCreateForm = () => {
    const [formError, setFormError] = useState("");

    const { data : categories, error : categoriesError} = getCategories();

    const createCategoryRequest = async (event) => {
        event.preventDefault()

        var data = JSON.stringify({
            name: event.target.name.value,
            parent: event.target.parent.value
        });

        var result = await createCategory(data);

        var result_msg = "";
        if(result.errors) {
            result_msg = result.errors[0].msg;
            setFormError(result_msg);
        }
        else {
            result_msg = "Criada uma categoria"
        }
        alert(result_msg);
    }
    
    return (
        <div>
            <div className="flex-col antialiased">
                <form onSubmit={createCategoryRequest}>
                    <div className="space-y-6">
                        {/* TITLE */}
                        <div className="text-3xl">
                            Criar uma categoria
                        </div>

                        <div>
                            <div className="text-sm text-gray-500">
                                Nome
                            </div>
                            <TextField name="name" type="text"/>
                        </div>

                        <div>
                            <div className="text-sm text-gray-500">
                                Categoria parente
                            </div>
                            <div className="relative inline-flex w-full">
                                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
                                <select name="parent" className="flex border-b border-primary rounded-lg text-gray-600 px-2 py-1 w-full bg-gray-100 hover:border-gray-400 focus:outline-none appearance-none">
                                    <option value={""}>-</option>
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
                        </div>

                        <div className="col-span-3">
                            <div className="flex items-center space-x-4">
                                <Button type="submit" text="Criar categoria"/>
                                <TextLink text="Voltar" link="/"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const CategoryCreate = () => {
    return (
        <div>
            <CategoryCreateForm/>
        </div>
    );
}

export default CategoryCreate;