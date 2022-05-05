import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

import { getProduct } from "../../utils/backend/product";

type ProductViewProps = {
    pid: string | string[];
}

const ProductView = (props: ProductViewProps) => {
    const { data : product, error : productError} = getProduct(props.pid);

    return (
        <div>
            <div className="max-w-7xl mx-auto bg-white p-10">
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-1">
                        <div className="w-full">
                            <Image
                                src={`/images/alicate.jpg`}
                                alt={"cart"}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div> 
                    </div>
                    <div className="col-span-1">
                        <div className="w-full">
                            {
                                product ?
                                    <span className="text-3xl font-black">
                                        { product.name }
                                    </span>
                                :
                                    <span>
                                        Loading...
                                    </span>
                            }
                            {
                                product ?
                                    <span className="text-3xl font-black">
                                        { product.price }$
                                    </span>
                                :
                                    <span>
                                        Loading...
                                    </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;