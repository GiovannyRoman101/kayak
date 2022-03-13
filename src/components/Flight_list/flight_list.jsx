import React, { useEffect, useState } from 'react'
import fetchJsonp from 'fetch-jsonp'
import FlightCard from '../FlightCard/flight_card'
import './flight_list.css'

function Flightlist() {
	// could of used an array for the filter
	const [isST, setIsST] = useState(false)
	const [isOW, setIsOW] = useState(false)
	const [isSA, setIsSA] = useState(false)
	const [flights, setFlights] = useState([])

	async function getFlights() {
		fetchJsonp('https://kayak.com/h/mobileapis/directory/airlines/homework', {
			jsonpCallback: 'jsonp'
		})
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				setFlights(json)
			})
	}

	useEffect(() => {
		getFlights()
	}, [])

	function renderFlights() {
		return flights
			.filter((flight) => {
				if (!isOW && !isST && !isSA) {
					return true
				}
				if (isOW && flight.alliance === 'OW') {
					return true
				}
				if (isSA && flight.alliance === 'SA') {
					return true
				}
				if (isST && flight.alliance === 'ST') {
					return true
				}
				return false
			})
			.map((data) => {
				return <FlightCard flight={data} />
			})
	}

	const onSkyTeamChange = () => {
		setIsST(!isST)
	}

	const onOneWorldChange = () => {
		setIsOW(!isOW)
	}

	const onStarAllianceChange = () => {
		setIsSA(!isSA)
	}

	return (
		<div>
			<div className="input-containers">
				<div className="input-container">
					<input type="checkbox" className="input-box" checked={isOW} onChange={onOneWorldChange} />
					<p className="input-text">Oneworld</p>
				</div>
				<div className="input-container">
					<input type="checkbox" className="input-box" checked={isST} onChange={onSkyTeamChange} />
					<p className="input-text">Sky Team</p>
				</div>
				<div className="input-container">
					<input type="checkbox" className="input-box" checked={isSA} onChange={onStarAllianceChange} />
					<p className="input-text">Star Alliance</p>
				</div>
			</div>
			<div className="flightlist-container">{renderFlights()}</div>
		</div>
	)
}

export default Flightlist
