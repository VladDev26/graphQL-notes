import React, {Component} from 'react';
import { connect } from 'react-redux';

import { asyncMockData } from '../actions';

class App extends Component{
	componentDidMount(){
		console.log(this.props);
	}

	render(){
		return(
			<div>
				App
				<button onClick={this.props.handleClick}>aaa</button>
			</div>
		);
	}
}





function mapStateToProps (store) {
	return {};
};
function mapDispatchToProps (dispatch) {
	return {
		// handleClick: () => dispatch({type: 'HANDLE_CLICK'})
		handleClick: () => dispatch(asyncMockData())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
