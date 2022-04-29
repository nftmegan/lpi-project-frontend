import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

const CategoryCreateForm = () => {
    const [formError, setFormError] = useState("");

    const createCategoryRequest = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/category/', {
                body: JSON.stringify({
                    name: event.target.name.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            const data = await response.json();
    
            console.log(data);

            var result = "";
            if(data.errors) {
                result = data.errors[0].msg;
                setFormError(result);
            }
            else {
                result = "Criada uma categoria"
            }
            alert(result);
        }
        catch(error) {
            console.log(error);
        }
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