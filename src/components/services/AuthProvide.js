import {
	Redirect
} from "react-router-dom";

import { useCookies } from 'react-cookie';

const AuthProvide = ({children}) => {
	const [ cookies ] = useCookies(['jwt']);

	if(!cookies.jwt) {
		return <Redirect to="/login" />
	}

	return children;

}

export default AuthProvide;