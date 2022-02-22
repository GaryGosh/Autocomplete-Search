import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
	return (
		<div className="App">
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<SearchBar placeholder="Type a Book Name.." data={BookData} />
		</div>
	);
}

export default App;
