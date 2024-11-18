import React, { useContext, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import "../css/navbar.css";
import { brandName, showBrandName } from "../yourCustomizations/brand";
import { Sun, Moon } from 'lucide-react';
import { useMediaQuery, IconButton } from '@mui/material';
import { ThemeContext } from '../services/themeContext';
import { aboutPageConfig, productsPageConfig, contactPageConfig } from '../yourCustomizations/navbar';

const navItems = [
  {
    path: "/about",
    aliasLinks: ["/"],
    icon: aboutPageConfig.icon,
    label: aboutPageConfig.name,
  },
  {
    path: "/products",
    aliasLinks: ["/product"],
    icon: productsPageConfig.icon,
    label: productsPageConfig.name,
  },
  {
    path: "/contact",
    aliasLinks: [],
    icon: contactPageConfig.icon,
    label: contactPageConfig.name,
  },
];

const matchPath = (path, currentPath) => {
  const regex = new RegExp(`^${path.replace(/:\w+/g, '[^/]+')}$`);
  return regex.test(currentPath);
};

const isCurrentPage = (navItem, location) => {
  return matchPath(navItem.path, location.pathname) ||
    navItem.aliasLinks.some(alias => matchPath(alias, location.pathname)) ||
    (navItem.path === "/products" && location.pathname.startsWith("/product"));
};

const DesktopNavbar = ({ location, brandAccent }) => (
  <Nav>
    <ul className="navbar-nav">
      {navItems.map((navItem) => (
        <li key={navItem.path} >
          <Link
            style={{
              "--brand-accent": brandAccent,
            }}
            className={`nav-item ${isCurrentPage(navItem, location) ? 'active' : ''}`}
            to={navItem.path}
          >
            {navItem.icon}
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  </Nav>
);

const MobileNavbar = ({ location, brandAccent }) => {
  const isSmallMobile = useMediaQuery('(max-width: 424px)');
  const currentPage = navItems.find(navItem => isCurrentPage(navItem, location)) || navItems.find(navItem => navItem.path === "/about");

  return (
    <Nav className="ms-auto d-flex d-lg-none">
      <NavDropdown
        title={
          <div className="nav-dropdown-menu-title">
            {currentPage.icon}
            {!isSmallMobile && currentPage.label}
          </div>
        }
        style={{
          "--brand-accent": brandAccent,
        }}
      >
        {navItems.filter(navItem => !isCurrentPage(navItem, location)).map((navItem) => {
          return (
            <NavDropdown.Item>
              <Link to={navItem.path} className="dropdown-item">
                <div className="d-flex align-items-center">
                  {navItem.icon}
                  <span className="ms-2">{navItem.label}</span>
                </div>
              </Link>
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </Nav>
  );
};

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 991px)');
  const { brandAccent, brandIcon, theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('initial');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('initial');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    handleScroll();


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar className="navbar">
      <Link className="navbar-brand" to="/">
        {brandIcon}
        {showBrandName &&
          <h3 className="mb-0 ms-2 navbar-brand-font d-none d-sm-block">{brandName}</h3>}
      </Link>
      {isMobile ? <MobileNavbar location={location} brandAccent={brandAccent} /> : <DesktopNavbar location={location} brandAccent={brandAccent} />}
      <IconButton onClick={toggleTheme}>
        {theme === 'dark' ? <Moon style={{
          color: "var(--primary-color)",
        }} size={18} strokeWidth={2} /> : <Sun style={{
          color: "var(--primary-color)",
        }} size={18} strokeWidth={2} />}
      </IconButton>
    </BootstrapNavbar>
  );
};

export default Navbar;