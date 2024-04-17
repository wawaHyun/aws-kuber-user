'use client';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';

import LinkButton, { linkButtonTitles } from '@/app/atoms/button/LinkButton';


function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const router = useRouter();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <HomeIcon fontSize="large" onClick={() => router.push(`/`)} />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="data:image/png;base64,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" alt="user photo" />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>


          </div>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {linkButtonTitles.map((elem) => (
                <LinkButton key={elem.id} title={elem.title} path={elem.path} />
            ))}
            
          </ul>
        </div>
      </div>
    </nav>

  );
}
export default Header;