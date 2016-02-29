import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = "AIzaSyAO5w8EnsCAM5PPAgHThSu6SeEA3qMxYl0";

//Create a new component. This component should produce some html

const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}
//Take this components generated html and put it on the page

ReactDOM.render(<App/>, document.querySelector('.container'));
