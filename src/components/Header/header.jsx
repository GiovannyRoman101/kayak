import React from 'react'
import Logo from '../../img/Logo.svg'
import './header.css'

function Header() {
	return (
		<div className="header-container">
			<img src={Logo} alt="kayak logo" className="kayak-logo" />
		</div>
	)
}

export default Header
