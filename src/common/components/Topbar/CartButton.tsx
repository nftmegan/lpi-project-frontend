import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid'

import Link from 'next/Link'

import {SecondaryButton, PrimaryButton} from '../UI/'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CartButton = () => {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button>
                        <div className="rounded-full transition-transform duration-150 ease-out hover:scale-110">
                            <div className={classNames(open ? 'bg-lpi-gray-dark' : '', 'p-1 hover:bg-lpi-gray-dark rounded-full hover:cursor-pointer')}>
                                <div className="w-10">
                                    <img
                                        src={`/icons/cart.png`}
                                        alt={"cart"}
                                    />
                                </div> 
                            </div>
                        </div>
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                            <div>
                                <div className="rounded-t-lg bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="p-4">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">Carrinho</h3>
                                                <p className="text-sm text-gray-500">Vista geral do carrinho</p>
                                            </div>

                                            <Popover.Button>
                                                <div className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <span className="sr-only">Close</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="p-4 text-gray-500 text-sm text-center">
                                        Não há produtos no carrinho
                                    </div>
                                </div>

                                <div className="rounded-b-lg bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="p-4">
                                        <div className="grid grid-cols-6 gap-2">
                                            <div className="col-span-6 sm:col-span-3">
                                                <Link href="/cart">
                                                    <SecondaryButton type="button" text="Ver carrinho"/>
                                                </Link>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <Link href="/checkout">
                                                    <PrimaryButton type="button" text="Checkout"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default CartButton;