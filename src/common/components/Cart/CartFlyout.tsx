/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

type CartFlyoutProps = {
    open: boolean;
}

const CartFlyout = (props:CartFlyoutProps) => {
    return (
        <Transition
            show={props.open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div className="absolute mt-2 w-72 -ml-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-black">
                <div className="p-2">
                    sasdasdasdas
                </div>
            </div>
        </Transition>
    )
}

export default CartFlyout;