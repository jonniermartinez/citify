import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

function Nav() {
    const translation = useTranslations('nav')
    return (
        <>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className='flex gap-4'>
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Citify</span>
                        </Link>
                        <div className="flex items-center gap-3 whitespace-nowrap rounded-full cursor-pointer bg-gray-300/50 hover:bg-gray-300/70 text-secondary-100 py-1 px-4 text-xs leading-5 font-medium">👨‍💻 1.0.0-dev
                            {/* <svg data-testid="Icon" className="stroke-current fill-none w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1.8" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" d="m9 6 6 6-6 6"></path></svg> */}
                        </div>

                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link href="https://twitter.com/jayddox" target='_blank'>
                            <Button variant="link">{translation("twitter")}</Button>

                        </Link>
                    </div>
                    {/* <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Nav