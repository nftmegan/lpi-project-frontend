import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Router from "next/router";
import Image from 'next/Image'
import Link from 'next/Link'

import { TextLink, TextField, PrimaryButton, SecondaryButton } from "../UI/";

import NotificationEmitter from "../Notifications/NotificationEmitter";

import { getProduct } from "../../utils/backend/product";

import { addProductToCartUtil } from '../../utils/cart';

type ProductViewProps = {
    pid: string | string[];
}

const ProductView = (props: ProductViewProps) => {
    const { data : product, error : productError} = getProduct(props.pid);

    const { emitNotification } = NotificationEmitter();

    const addProductToCartRequest = async (event) => {
        event.preventDefault()
        
        if(event.target.productId.value == 0)
            return;

        var data = {
            productId: event.target.productId.value,
            quantity: event.target.quantity.value
        };

        var result = await addProductToCartUtil(data);

        var result_msg = "";
        if(result) {
            if(result.errors) {
                result_msg = result.errors[0].msg;
                //setFormError(result_msg);
            }
            else {
                result_msg = "Adicionado um produto ao carrinho"
            }
        }

        Router.reload();

        emitNotification("success", result_msg);
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto p-10">
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-1">
                        <div className="flex mx-auto justify-center">
                            <div className="p-6 bg-white">
                                <img
                                    src={`/images/alicate.jpg`}
                                    alt={"cart"}
                                />
                            </div>
                            
                        </div> 
                    </div>
                    <div className="col-span-1">
                        <div className="w-full">
                            <div className="flex-1">
                                {
                                    product ?
                                        <div className="">
                                            <div className="text-3xl">
                                                { product.name }
                                            </div>
                                            <div className="text-xl text-gray-500">
                                                { product.price }$
                                            </div>
                                            <div className="">
                                                { product.description }
                                            </div>
                                        </div>
                                    :
                                        <span>
                                            Loading...
                                        </span>
                                }
                            </div>
                            

                            <div className="grid grid-cols-2 gap-4">
                                <form onSubmit={addProductToCartRequest}>
                                    <input type="hidden" name="productId" value={ product ? product._id : 0 }/>
                                    <input type="hidden" name="quantity" value={1}/>
                                    <SecondaryButton type="submit" text="Adicionar ao carrinho"/>
                                </form>
                                <PrimaryButton type="button" text="Comprar agora"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;