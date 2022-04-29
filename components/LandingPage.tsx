import {Dialog, Transition} from "@headlessui/react";
import React, { ReactNode, Fragment } from 'react';

import Image from 'next/image'

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