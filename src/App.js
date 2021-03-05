import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Main from "./components/Main";
import Room from "./components/Room";
import Login from "./components/Login";

import './App.css';
import AuthProvide from "./components/services/AuthProvide";

function App() {

	return (
		<Router>
			<Switch>
				<Route path="/room/:roomId">
					<AuthProvide>
						<Room />
					</AuthProvide>
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Main />
				</Route>
			</Switch>
		</Router>
  	);
}

export default App;
