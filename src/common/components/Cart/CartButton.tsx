/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'

import Image from 'next/image'
import CartFlyout from './CartFlyout'

const CartButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="p-1 flex hover:bg-lpi-gray-dark rounded-full hover:cursor-pointer" onClick={() => {setOpen(!open)}}>
                <div className="w-10">
                    <Image
                        src={`/icons/cart.png`}
                        alt={"cart"}
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                    />
                </div>
            </div>
            <CartFlyout open={open}/>
        </div>
        
    )
}

export default CartButton;