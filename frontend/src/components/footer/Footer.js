import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-600 text-white">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center dark:text-white
                    ">
                        © 2024{" "}
                        <a href="" className="hover:underline">
                            Good Universe
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white
                     sm:mt-0">
                        <li>
                            <a href="" className="hover:underline me-4 md:me-6 text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline me-4 md:me-6 text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline me-4 md:me-6 text-white">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:underline text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer