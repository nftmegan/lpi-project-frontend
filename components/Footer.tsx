import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-800 py-16 text-center">
                <span className="text-gray-100">
                    @ 2021 Todos os direitos reservados
                </span>
            </div>
        </div>
    );
}

export default Footer;