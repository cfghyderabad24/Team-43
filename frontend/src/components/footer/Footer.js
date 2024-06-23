import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center gap-30">
                    <span className="text-sm sm:text-center dark:text-white">
                        © 2024{" "}
                        <Link to="/" className="hover:underline no-underline">
                            Good Universe
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white sm:mt-0">
                        <li>
                            <Link to="#" className="hover:underline no-underline me-4 md:me-6 text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline no-underline me-4 md:me-6 text-white">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline no-underline me-4 md:me-6 text-white">
                                Licensing
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline no-underline text-white cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

