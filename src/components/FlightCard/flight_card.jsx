import './flight_card.css'
import React, { useState } from 'react'

function flightcard({ flight }) {
	const [onHover, setOnHover] = useState(false)

	const showInfo = () => {
		setOnHover(true)
	}

	const hideInfo = () => {
		setOnHover(false)
	}

	return (
		<div className="card-box" onMouseEnter={showInfo} onMouseLeave={hideInfo}>
			<div className="title-image">
				{/* why doesnt the logourl include kayak.com. there are like 3 urls and the one given is not just kayak */}
				<img className="airlogo" src={`https://kayak.com${flight.logoURL}`} alt="flight logo" />
				<div className="card-detail">
					<p className={onHover ? 'card-title-text-alt' : 'card-title-text'}>{flight.name}</p>
					{onHover && flight.alliance === 'OW' && <p className="alliance-and-phone">Oneworld</p>}
					{onHover && flight.alliance === 'ST' && <p className="alliance-and-phone">Sky Team</p>}
					{onHover && flight.alliance === 'SA' && <p className="alliance-and-phone">Star Alliance</p>}
					{onHover && flight.phone.length !== 0 && <p className="alliance-and-phone">{flight.phone}</p>}
					{onHover && (
						<a href={flight.site} className="hyperlink">
							{flight.site}
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default flightcard
