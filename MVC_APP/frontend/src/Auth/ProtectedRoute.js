import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './AuthContext'
// import Spinner from 'react-bootstrap/Spinner'

function ProtectedRoute({ redirect, state, component: Component, ...rest }) {
	const { isSigned } = useAuth()

	const [protect, setProtect] = useState()

	// check for token validity to decide whether to render component
	useEffect(() => {
		const checkAuth = async () => {
			const isAuthenticated = await isSigned()
			setProtect(!isAuthenticated)
		}
		checkAuth()
	}, [isSigned])

	return (
		<Route
		{...rest}
		render={props => (
			protect
			? <Redirect to={{ pathname: redirect, state: { ...props.location.state, ...state } }} />
			: <Component />
		)}
		/>
	)
}

export default ProtectedRoute
