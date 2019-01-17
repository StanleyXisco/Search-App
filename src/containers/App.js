import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from './robots';


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			return response.json();
		}).then(users => {
			this.setState({ robots: users })
		});
		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		}
	render() {
		const filterRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		return (
		<div className='tc'>
			<h1 className='f1'>Employee Details</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filterRobots} />
			</Scroll>
		</div>
		);
	}
}

export default App;