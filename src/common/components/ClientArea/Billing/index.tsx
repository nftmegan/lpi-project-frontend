import {Dialog, Transition} from "@headlessui/react";
import React, { ReactNode, useState, Fragment } from 'react';

import { CreditCardIcon, KeyIcon, UserCircleIcon, UserGroupIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import PaymentMethods from "./PaymentMethodsTab";

const BillingPage = () => {
    return (
        <div className="space-y-6">
            <PaymentMethods/>
        </div>
    )
}

export default BillingPage;