import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "HIDDEN"; // add new key

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('surfboards');
  }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
           videos: videos,
           selectedVideo: videos[0]
          });
        //this.setState({ videos: videos}); only works when key and value are the same
      });
    }
  render() {
     const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

    var logoStyle={
       width: '100%'
     };

     var colStyle3 = {
       padding: 20
     }

     var colStyle9={
       paddingTop: 20
     }

    return (
      <div>
        <div className="row">
          <div style = {colStyle3} className = "col-sm-3">
            <img style={logoStyle} src="/public/youtube-logo.png"/>
          </div>
          <div style={colStyle9} className=" col-sm-9">
          <SearchBar  onSearchTermChange={videoSearch} /> {/* on search term change is passing in video search */}
          </div>
        </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} /> {/* sets the state with the current videos */}
      </div>
    );
  }
}
//Take this components generated html and put it on the page

ReactDOM.render(<App/>, document.querySelector('.container'));
