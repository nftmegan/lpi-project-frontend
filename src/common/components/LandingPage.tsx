import {Dialog, Transition} from "@headlessui/react";
import React, { ReactNode, Fragment } from 'react';

import Image from 'next/image'

import ModalLayout from './Layouts/ModalLayout';
import NewProductForm from './NewProductForm';

import { getProducts, deleteProduct } from "../../../utils/backend/product";

const LandingPage = () => {

    return (
        <div className="w-full">
            <div className="text-2xl text-center text-gray-600">
                Bem vindo, utilizador!
            </div>
        </div>
    );
}
  
export default LandingPage;