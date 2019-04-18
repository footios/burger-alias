import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';

import Order from '../../components/Order';
import withErrorHandler from '../../hoc/withErrorHandler';
import Spinner from '../../components/UI/Spinner';

export default connect(mapStateToProps, mapDispatchToProps)(
	withErrorHandler((props) => {
		useEffect(() => {
			props.onFetchOrders();
		}, []);
		let orders = <Spinner />;
		if (!props.loading) {
			orders = props.orders.map((order) => (
				<Order key={order.id} ingredients={order.ingredients} price={order.price} />
			));
		}
		return <div>{orders}</div>;
	}, axios)
);

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch( actions.fetchOrders() )
    };
};