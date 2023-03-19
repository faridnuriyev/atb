import React from 'react'
import './header.css'
import HeaderMain from './HMain/HeaderMain'
import HeaderMenu from './HMenu/HeaderMenu'
import HeaderSearch from './HSearch/HeaderSearch'

function Header() {
  return (
    <>
    <header>
        <HeaderSearch />
        <HeaderMain />
        <HeaderMenu />
    </header>
    </>
  )
}

export default Header

