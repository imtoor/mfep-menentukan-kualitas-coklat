import React, {Fragment} from 'react';
import { connect } from "react-redux";
import OrderRecivedSec from '../../components/OrderRecivedSec';


const OrderRecived =({cartList, delivery}) => {


    return(
        <Fragment>
             <OrderRecivedSec cartList={cartList} delivery={delivery}/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        delivery: state.delivery,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(OrderRecived);
