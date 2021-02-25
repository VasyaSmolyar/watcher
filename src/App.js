import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Main from "./components/Main";
import Room from "./components/Room";
import './App.css';

function App() {

	return (
		<Router>
			<Switch>
				<Route path="/room/:roomId">
					<Room />
				</Route>
				<Route path="/">
					<Main />
				</Route>
			</Switch>
		</Router>
  	);
}

export default App;
