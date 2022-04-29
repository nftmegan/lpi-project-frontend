import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";
import Link from 'next/Link'

interface TextFieldProps {
    id?: string;
    name: string;
    type: string;
    autoComplete?: string;
}

const TextLink = (props: TextFieldProps) => {
    return (
        <div>
            <input name={props.name} type={props.type} autoComplete={props.autoComplete}
            className="bg-gray-100 focus:bg-gray-200 rounded-lg p-1 w-full border-b border-primary"/>
        </div>
    );
}

export default TextLink;