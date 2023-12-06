'use client';

import { ReactNode, FC, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/assets/logo-transparent.png';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import './styles/Navbar.scss';

const handleClickLogo = () => {
  window.location.href = '/';
};

const handleClickLeftButton = (toGo: string) => {
  window.location.href = toGo;
};

interface NavbarProps {
  showLeftButton?: boolean;
  showRightButton?: boolean;
  showBrandName?: boolean;
  showBrandIcon?: boolean;
  showLeftPage?: boolean;
  showRightPage?: boolean;
  showMidPage?: boolean;
  toggle?: boolean;
}

const NavBarBaseContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark p-1"
      
    >
      <div className="container">{children}</div>
    </nav>
  );
};

export default function Navbar({
  showMidPage = true,
  showLeftButton = true,
  showRightButton = true,
  toggle = true,
  showLeftPage = true,
  showRightPage = true,
}: NavbarProps) {
  const [collapsed, setCollapsed] = useState(true);
  const { data: session } = useSession();

  let leftButton = 'Sign in';
  let leftButtonLink = 'api/auth/signin';

  if (session) {
    leftButton = 'Sign out';
    leftButtonLink = 'api/auth/signout';
  }

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <NavBarBaseContainer>
        <Image
          style={{ width: 'auto', height: 'auto', cursor: 'pointer' }}
          onClick={handleClickLogo}
          src={Logo}
          alt="ARTISAN"
          width={33}
          height={33}
        />
        {toggle && (
          <button
            className={`navbar-toggler navbar-toggler-right border-0 ${
              collapsed ? '' : 'collapsed'
            }`}
            type="button"
            data-toggle="collapse"
            data-target="#navbar12"
            aria-expanded={!collapsed}
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        <div
          className={`navbar-collapse collapse ${collapsed ? '' : 'show'}`}
          id="navbar12"
          style={{ transition: 'height 0.3s ease' }}
        >
          <ul className="navbar-nav mx-auto">
            {showLeftPage && (
              <li className="nav-item">
                <Link className="nav-link" href="/APIs">
                  APIs
                </Link>
              </li>
            )}
            {showMidPage && (
              <li className="nav-item">
                <Link className="nav-link" href="/pricing">
                  Pricing
                </Link>
              </li>
            )}
            {showRightPage && (
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Services
                  <br />
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {showLeftButton && (
              <li className="nav-item">
                <div className="nav-link" id="login">
                  <div
                    className="btn btn-outline-light"
                    onClick={(e) => handleClickLeftButton(leftButtonLink)}
                  >
                    {leftButton}
                  </div>
                </div>
              </li>
            )}
            {showRightButton && (
              <li className="nav-item">
                <Link className="nav-link text-primary" href="/dashboard">
                  <div className="btn btn-light">Create</div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </NavBarBaseContainer>
    </>
  );
}
