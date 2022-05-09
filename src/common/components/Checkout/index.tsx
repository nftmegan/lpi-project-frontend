


import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Link from 'next/Link'
import Image from 'next/Image'

import { getCategories } from "../../utils/backend/category";

import { PrimaryButton } from "../UI";


const CheckoutPage = () => {
    /*
    const { data : categories, error : categoriesError} = getCategories();
    const filteredCategories = categories ? categories.filter(c => { return c.parent === null }) : categories;
    */

    return (
        <div className="">
            
        </div>
    );
}

export default CheckoutPage;