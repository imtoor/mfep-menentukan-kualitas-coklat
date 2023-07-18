import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {totalPrice} from "../../utils";
import whatsapp from "../../images/whatsapp.png"
import './style.scss'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const OrderRecivedSec = () => {

    const {id} = useParams();

    const orderReceivedUrl = process.env.REACT_APP_MODE === 'prod' ? process.env.REACT_APP_PROD_API_ENDPOINT + process.env.REACT_APP_ORDERS + `/${id}`:process.env.REACT_APP_DEV_API_ENDPOINT + process.env.REACT_APP_ORDERS + `/${id}`
  
    const [order, setOrder] = useState([{}])
    const [orderItem, setOrderItem] = useState([])
   
    useEffect(() => {
        
        fetch(orderReceivedUrl, {
            method: 'GET',
            headers: {'Content-Type':'application/json; charset=UTF-8'}
        }).then((response) => {

            let res = response.json();
            res.then(data => {
                setOrder(data.data)
                data.data.order_item.forEach(item => {
                    setOrderItem(order => [item, ...order])
                });
            });

        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })

    }, []);

    return(
        <section className="cart-recived-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="order-top">
                        <h2>Terima kasih atas pesanan anda <span>Pesanan anda telah diterima.</span></h2>
                        <Link to='/' className="theme-btn">Back Home</Link>
                    </div>
                    <Grid className="cartStatus">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grid className="cartTotals">
                                        <h4>Order details</h4>
                                        <Table>
                                            <TableBody>
                                                {orderItem.map(item => (
                                                    <TableRow key={item.products.id}>
                                                        <TableCell><img src={`/product/1.png`} alt="" /> {item.products.nama} - Rp{new Intl.NumberFormat().format(item.products.harga)} x {item.qty}</TableCell>
                                                        <TableCell
                                                            align="right">Rp{new Intl.NumberFormat().format(item.qty * item.products.harga)}</TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow className="totalProduct">
                                                    <TableCell>Total Produk</TableCell>
                                                    <TableCell align="right">{orderItem.length}</TableCell>
                                                </TableRow>

                                                <TableRow className="totalProduct">
                                                    <TableCell>Alamat Pengiriman</TableCell>
                                                    <TableCell align="right">{order.address}</TableCell>
                                                </TableRow>

                                                <TableRow className="totalProduct">
                                                    <TableCell>Metode Pembayaran</TableCell>
                                                    <TableCell align="right">{order.payment_method}</TableCell>
                                                </TableRow>                                                

                                                <TableRow className="totalProduct">
                                                    <TableCell>Catatan</TableCell>
                                                    <TableCell align="right">{order.note}</TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell>Sub Total Produk</TableCell>
                                                    <TableCell align="right">Rp{new Intl.NumberFormat().format(order.total)}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Biaya Pengiriman: {order.delivery_name}</TableCell>
                                                    <TableCell align="right">Rp{new Intl.NumberFormat().format(order.delivery_price)}</TableCell>
                                                </TableRow>                                                
                                                <TableRow>
                                                    <TableCell><b>Total</b></TableCell>
                                                    <TableCell
                                                        align="right"><b>Rp{new Intl.NumberFormat().format(order.total + order.delivery_price)}</b></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        {order.payment_method === 'bank_transfer' && 
                        <div className="order-top">
                            <h3>Silahkan Transfer pada rekening di bawah ini</h3>
                            <a href='https://api.whatsapp.com/send?phone=6281339292954&text=Halo%20Admin%0A%0ASaya%20ingin%20konfirmasi%20pesanan%20saya%20' target='_blank' className="theme-btn bg-success" style={{borderRadius: '2em'}}>
                                Chat Admin <img src={whatsapp} width="35px" />
                            </a>
                            <h2>
                                <span>BANK BNI, 4688912938 - A/N ASHAR </span><p></p>
                                <h6>Lalu CHAT ADMIN untuk Konfirmasi agar pesanan anda segera diproses. Terima Kasih</h6>
                            </h2>
                        </div>}

                        {order.payment_method === 'cash' && 
                        <div className="order-top">
                            <h3>Harap menyiapkan sejumlah uang sesuai dengan total yang tertera di atas</h3><br />
                            <a href='https://api.whatsapp.com/send?phone=6281339292954&text=Halo%20Admin%0A%0ASaya%20ingin%20konfirmasi%20pesanan%20saya%20' target='_blank' className="theme-btn bg-success" style={{borderRadius: '2em'}}>
                                Chat Admin <img src={whatsapp} width="35px" />
                            </a>
                            <h6>Atau CHAT ADMIN untuk informasi lebih lanjut. Terima Kasih</h6>
                        </div>}                        
                </div>
            </div>
        </section>
    )
}

export default OrderRecivedSec;