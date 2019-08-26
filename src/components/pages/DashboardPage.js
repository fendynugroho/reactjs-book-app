import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmedEmailMessage from '../messages/ConfirmedEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBookCTA from '../ctas/AddBookCTA';

const DashboardPage = ({ isConfirmed, books }) => (
	<div>
		<h1>This is Dashboard Page!</h1>
		{!isConfirmed && <ConfirmedEmailMessage />}
		{books.length === 0 && <AddBookCTA />}
	</div>
);

DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired,
	books: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

function mapStateToProps(state) {
	return {
		isConfirmed: state.user.confirmed,
		books: allBooksSelector(state)
	};
}

export default connect(mapStateToProps)(DashboardPage);
