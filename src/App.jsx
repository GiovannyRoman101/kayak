import React from 'react'

import './App.css'
import Header from './components/Header/header'
import FlightList from './components/Flight_list/flight_list'

function App() {
	return (
		<div>
			<Header />
			<div className="list-container">
				<h1 className="airline-text">Airlines</h1>
				<h3 className="filter-text">Filter by Alliances</h3>
				<FlightList />
			</div>
		</div>
	)
}

export default App
