import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { MostrarCatalogo as Catalogo} from './../../components/Item'

import * as itemActions from './../../store/actions/item'

function mapStateToProps(store: {
  itemReducer: any,
  login: any
}) {
  return {
    itemReducer: store.itemReducer,
    login: store.login
  };
}

class Catalog extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }
  
  componentWillMount() {

    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
      this.props.dispatch(itemActions.getCatalogo(this.props.cookies.get('empresaId')))
    }

  }

  render(){

    let items: any[] = [
      {
        "item": {
          "_id": "5ecdb0f7db386b4e1b75e37a",
          "nombre": "itemC",
          "precio": "300",
          "foto": "path/to/foto",
          "unidad_de_medida_id": "5ecdb0bcdb386b4e1b75e378",
          "updated_at": "2020-05-27 00:14:47",
          "created_at": "2020-05-27 00:14:47",
          "catalogo_id": "5ecdb0f7db386b4e1b75e379",
          "unidad_de_medida": {
            "_id": "5ecdb0bcdb386b4e1b75e378",
            "nombre": "Unidad",
            "abreviatura": "U",
            "updated_at": "2020-05-27 00:13:48",
            "created_at": "2020-05-27 00:13:48"
          }
        }
      }
    ]

    if(
      this.props.itemReducer.fetched &&
      this.props.itemReducer.data !== undefined
    ) {
      items = this.props.itemReducer.data.items
    }

    return(
      <div>
        <Catalogo items={items} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Catalog)