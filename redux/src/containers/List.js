import React, {Component} from 'react';
import { connect } from 'react-redux';

import { itemsFetchData } from '../actions/items';

import alerts from '../const/alerts';

let url = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';

class List extends Component{
	componentDidMount(){
		this.props.fetchData(url);
	}

	render(){
		if (this.props.hasErrored) {return alerts.error;}
		if (this.props.isLoading) {return alerts.loading;}

		return(
			<ul>
				{this.props.items.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
			</ul>
		);
	}
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);