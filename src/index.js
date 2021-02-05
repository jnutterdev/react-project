<<<<<<< HEAD
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import AudioPlayer from './Components/AudioPlayer';
import Buttons from './Components/Buttons';
import Footer from './Components/Footer'

class WebPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mp3path:'http://localhost:3001/songs/',
			mp3name:'Waxwork.mp3',
			mp3artist:'Azure Window',
			audiopath:'',
			mp3autoplay:'autoPlay',
			mp3genre:'IDM',
			currentButtonId:0,
			clickedButtonId:'',
			mp3Data:[],
		}
	}
	
	componentWillMount() {
		var mp3title = this.state.mp3name;
		mp3title = mp3title.replace('.mp3','');
		this.changeMP3 = this.changeMP3.bind(this);
		this.setState((state)=>({
			mp3title:mp3title,
			audiopath:state.mp3path+state.mp3name,
			mp3Data:[
				{
					name:'Waxwork.mp3',
					artist:'Azure Window',
					genre:'IDM'
				},
				{
					name:'Grime.mp3',
					artist:'Caliper',
					genre:'Beats'
				}
			]
		}));
	}
	
	changeMP3(currentButtonId, genre, name, artist) {
		var mp3title = name;
		var mp3name = name;
		mp3title = mp3title.replace('.mp3','').replaceAll('_',' ').toUpperCase();
		this.setState((state)=>({
			audiopath:state.mp3path+mp3name,
			mp3title:mp3title,
			mp3artist:artist,
			mp3genre:genre,
			currentButtonId:currentButtonId,
			clickedButtonId:currentButtonId,
			mp3name:mp3name
		}));
		
	}
	
	render() {

		return (
			<div className="audio-container">
        <Header />
				<h1>{this.props.title}</h1>
        <AudioPlayer childRef="audio" audiopath={this.state.audiopath} />
				<section className="mp3list-buttons">
					{
						this.state.mp3Data.map((mp3,index)=>
						<Buttons key={index} 
						changeMP3={this.changeMP3}
						clickedButtonId={this.state.mp3name}
						mp3={mp3.name}
						artist={mp3.artist}
						genre={mp3.genre}
						/>
						)
					}
				</section>
        <Footer />
			</div>
		);
	}
}

ReactDOM.render(
  <WebPlayer title="Web audio player"/>,
  document.getElementById('root')
);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import "./assets/css/style.css";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 74b4a90eb4d393c88457039a8c5675a43ab8ea1c
