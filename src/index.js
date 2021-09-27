
import React from "react";
import ReactDOM from "react-dom";
import { API_KEY } from "./config"

import SearchBar from './components/search-bar'


// Create a new component. this component should produce
// some HTML
const App = () => {
    return <div>
        <SearchBar />
    </div>
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'))