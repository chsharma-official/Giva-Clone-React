import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <h1>GIVA</h1>
    <p>Search</p>
    <div id="icons">
      <span>Account</span>
      <span>WishList</span>
      <span>Cart</span>
    </div>
    <div>
    <nav>
      Shop By Category ⩔
      <ul>
        <li>All</li>
        <li>Rings</li>
        <li>Necklace & Pendants</li>
        <li>Bracelets</li>
        <li>Earrings</li>
        <li>Other Categories</li>
      </ul>
    </nav>
    <nav>Gifts for Him</nav>
    <nav>Gifts for Her</nav>
    <nav>GIVA Gift Card</nav>
    <nav>Gift Store ⩔
      <ul>
        <li>Shoy by Occassion</li>
        <li>Shop by Theme</li>
        <li>Shop by Recipient</li>
        <li>Shop by Price</li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default Header