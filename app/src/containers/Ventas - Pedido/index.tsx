import React from 'react';
import List from './List'
import Detail from './Detail'

export function SaleRequests(props: any) {
	return <List { ...props } />;
}

export function DetailSaleRequest(props: any) {
	return <Detail { ...props } />;
}