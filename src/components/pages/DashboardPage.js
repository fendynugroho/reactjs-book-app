import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmedEmailMessage from '../messages/ConfirmedEmailMessage';

const DashboardPage = ({ isConfirmed }) => (
	<div>
		<h1>This is Dashboard Page!</h1>
		{!isConfirmed && <ConfirmedEmailMessage />}
	</div>
);

DashboardPage.propTypes = {
	isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isConfirmed: state.user.confirmed
	};
}

export default connect(mapStateToProps)(DashboardPage);
