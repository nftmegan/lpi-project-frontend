import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";
import Button from "../UI/Button";

type ProductViewProps = {
    pid: string | string[];
}

const ProductView = (props: ProductViewProps) => {
    const [productData, setProductData] = useState();
    const [dataFetched, setDataFetched] = useState(false);

    const getProductData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/product/${props.pid}`, {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'GET'
            })
            const data = await response.json();

            console.log(data);

            setProductData(data);
            setDataFetched(true);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setDataFetched(false);
        getProductData();
    }, [props.pid]);

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-1">
                        {
                            dataFetched ?
                            <span className="text-3xl font-black">
                                {productData.name}
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
    );
}

export default ProductView;