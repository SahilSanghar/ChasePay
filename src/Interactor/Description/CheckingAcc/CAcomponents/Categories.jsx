import React from 'react';
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'; 

const Categories = () => {
return (
    <div className='sticky-top mt-[70px] h-[50px] py-2 shadow-sm bg-white'>

    {/* ------------- Checking ------------ */}
    <Menu as="div" className="relative inline-block text-left ml-[500px]">
    <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            Checking
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
    </div>

    <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Compare Everyday Accounts
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                    href="#"
                    className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay Total Checking
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay Premier Plus Checking
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Compare Kids & Students Accounts
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay First Banking
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay High School Checking
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay College Checking
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Compare Premium Accounts
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay Sapphire Banking
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay Private Client Checking
                </a>
            )}
            </MenuItem>
        </div>
        </MenuItems>
    </Transition>
    </Menu>
    
    {/* ------------- Savings ------------ */}
    <Menu as="div" className="relative inline-block text-left ml-[20px]">
    <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            Savings
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
    </div>

    <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Compare Savings Accounts
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                    href="#"
                    className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay Savings
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Chasepay Premier Savings
                </a>
            )}
            </MenuItem>
        </div>
        </MenuItems>
    </Transition>
    </Menu>
    
    {/* ------------- CDs ------------ */}
    <Menu as="div" className="relative inline-block text-left ml-[20px]">
    <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            CDs
        </MenuButton>
    </div>
    </Menu>
    
    {/* ------------- More Services ------------ */}
    <Menu as="div" className="relative inline-block text-left ml-[20px]">
    <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            More Services
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
    </div>

    <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                POPULAR LINKS
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                    href="#"
                    className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                New account FAQs
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Learn about Overdraft Services
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Find your routing/account number
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Add money to your account
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Order checks
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Activate debit card
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                FINANCIAL TIPS & TOOLS
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Manage your FInancial Goals
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Grow your savings with Autosave
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                View your free credit score
                </a>
            )}
            </MenuItem>
            <MenuItem>
            {({ focus }) => (
                <a
                href="#"
                className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                )}
                >
                Schedule a meeting
                </a>
            )}
            </MenuItem>
        </div>
        </MenuItems>
    </Transition>
    </Menu>
    </div>
);
};

export default Categories;
