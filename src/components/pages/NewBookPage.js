import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import SearchBookForm from '../forms/SearchBookForm';

export class NewBookPage extends Component {
	state = {
		book: null
	};

	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<Segment>
				<h1>Add new book to your collection</h1>
				<SearchBookForm />
			</Segment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewBookPage);
