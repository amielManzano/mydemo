import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle">
              <i className="fa fa-bars"></i>
          </label>
      <a href="#" className="logo">logo</a>
      <input type="checkbox" id="chkToggle"></input>
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="#" className="nav-links">Home</a>
        </li>
        <li>
          <a href="#" className="nav-links">Products</a>
        </li>
        <li>
          <a href="#" className="nav-links">About Us</a>
        </li>
        <li>
          <a href="#" className="nav-links">Contact Us</a>
        </li>
        <li>
          <a href="#" className="nav-links">Blog</a>
        </li>
      </ul>
    </nav>
    </>
  )
}
