import React, {Component} from 'react';
import VolumeSlider from './VolumeSlider';
import AudioPlayerButtons from './AudioPlayerButtons';


class AudioPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			volumeBeforeMute:.50,
			speakerEntity:"&#128266;"
		}
		this.pause = this.pause.bind(this);
		this.play = this.play.bind(this);
		this.mute = this.mute.bind(this);
		this.changeVolume = this.changeVolume.bind(this);
		this.volumeRef = React.createRef();
	}
	
	componentDidMount(){
		this.refs.audio.volume = this.state.volumeBeforeMute;
	}
	
	componentWillReceiveProps() {
		this.refs.audio.pause();
		this.refs.audio.load();
		this.refs.audio.play();
	}
	
	pause(){
		this.refs.audio.pause();
	}
		
	play(){
		this.refs.audio.play();
		this.refs.audio.volume = this.volumeRef.current.value/100;		
	}

	mute(){
		if(this.refs.audio.volume === 0)
		{
			// To unmute the player
			this.refs.audio.volume=this.volumeRef.current.value/100;
			this.setState((state)=>({
				speakerEntity:'&#128266;'
			}));
		} else {		
			// To mute the player
			this.setState((state)=>({
				speakerEntity:'&#128263;',
			}));
			this.refs.audio.volume=0;
		}

	}
	
	changeVolume() {
		this.refs.audio.volume = this.volumeRef.current.value/100;
		if(this.refs.audio.volume>0) {
			this.setState((state)=>({
				speakerEntity:'&#128266;',
			}));			
		} else {
			this.setState((state)=>({
				speakerEntity:'&#128263;',
			}));			
		}
	}
	
	render() {
		
		return (
			<div>
				<audio ref={this.props.childRef}>
					<source src={this.props.audiopath} type="audio/mpeg" />
				</audio>
				<AudioPlayerButtons entity={this.state.speakerEntity} pause={this.pause} play={this.play} mute={this.mute} />
				<VolumeSlider changeVolume={this.changeVolume} volumeRef={this.volumeRef}/>
			</div>
		)
	}
}

export default AudioPlayer;