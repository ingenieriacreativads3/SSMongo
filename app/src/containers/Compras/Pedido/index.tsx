import React from 'react';
import List from './List'
import Detail from './Detail'
import NuevoPedido from './NuevoPedido'

export function PurchaseRequests(props: any) {
  return <List { ...props } />;
}

export function DetailPurchaseRequest(props: any) {
	return <Detail { ...props } />;
}

export function PedidoNuevo(props: any) {
	  return <NuevoPedido { ...props } />;
  }