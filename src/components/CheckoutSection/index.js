import React, {Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Link} from 'react-router-dom'
import {totalPrice} from "../../utils";

// images
import bri from '../../images/bank/bri.png';
import bni from '../../images/bank/bni.png';
import mandiri from '../../images/bank/mandiri.png';
import bca from '../../images/bank/bca.png';

import CheckWrap from '../CheckWrap'

import './style.scss';
import { toast } from 'react-toastify';

const cardType = [
    {
        title: 'bri',
        img: bri
    },
    {
        title: 'bni',
        img: bni
    },
    {
        title: 'mandiri',
        img: mandiri
    },
    {
        title: 'bca',
        img: bca
    },
];

function todaysDate() {
    let date = new Date();
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

function formatDate(date) {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
 }

 function getDeliveryEstimation(days) {
    let today  = new Date(todaysDate());
    let result = formatDate(addDays(today, days));
    return result;
 }

const CheckoutSection = ({cartList}) => {
    // states
    const [tabs, setExpanded] = useState({
        billing_adress: true,
        payment: false,
        delivery: false,
    });
    const [forms, setForms] = useState({
        name: window.localStorage.getItem("isLogin") == '1' ? window.localStorage.getItem("full_name"):'',
        address: '',
        email: window.localStorage.getItem("isLogin") == '1' ? window.localStorage.getItem("email"):'',
        phone: '',
        note: '',

        payment_method: 'cash',

        bank: '',
        bank_holder: '',
        bank_number: '',

        delivery: '',
        delivery_price: 0,
        total: 0
    });

    const [dif_ship, setDif_ship] = useState(false);

    const [delivery, setDelivery] = useState([
        {'name': 'reguler', 'biaya': 35000},
        {'name': 'ekonomi', 'biaya': 20000},        
    ]);

    const [deliveryFee, setDeliveryFee] = useState(0);
    const [deliveryName, setDeliveryName] = useState('');

    // tabs handler
    function faqHandler(name) {
        setExpanded({
            billing_adress: false, 
            payment: false,
            delivery: false,
            [name]: !tabs[name],
        });
    }

    // forms handler
    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value})
    };

    

    async function submit() {

        let frm = Object.keys(forms);

        for (let i = 0; i < frm.length; i++) {
            if (frm[i] === 'payment_method' && forms[frm[i]] === 'bank_transfer') {
                if(forms[frm[i+1]] === '' || forms[frm[i+2]] === '' || forms[frm[i+3]] === '') {
                    toast.error('Harap lengkapi data bank anda!');
                    return;
                }
            } else {
                if (frm[i] !== 'note' && frm[i] !== 'bank' && frm[i] !== 'bank_holder' && frm[i] !== 'bank_number') {
                     if(forms[frm[i]] === '' || forms[frm[i]] === undefined) {
                        toast.error('Harap lengkapi data pengiriman anda!');
                        return;
                     }
                }
            }
        }

        await fetch("http://localhost:8000/api/orders", {
            method: 'POST',
            body: JSON.stringify({
                forms: forms,
                item: cartList
            }),
            headers: {'Content-Type':'application/json; charset=UTF-8'}
        }).then((response) => {

            let res = response.json();

            res.then(data => {

                if (data.success) {
                    toast.success(data.message);
                    window.localStorage.setItem('persist:root', {"data":"{\"products\":[],\"symbol\":\"$\"}","cartList":"{\"cart\":[]}","wishList":"{\"w_list\":[]}","compareList":"{\"compare_list\":[]}","_persist":"{\"version\":-1,\"rehydrated\":true}"})
                    setTimeout(() => {
                        window.location = `/order_received/${data.data.order_id}`;
                    }, 1500);
                } else {
                    toast.error(data.message);
                }
            
            })

        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })

    }
    
    return (
        <Fragment>
            <Grid className="checkoutWrapper section-padding">
                <Grid className="container" container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <div className="check-form-area">
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler('billing_adress')}>
                                    Lengkapi data pengiriman
                                    <FontAwesome name={tabs.billing_adress ? 'minus' : 'plus'}/>
                                </Button>
                                <Collapse in={tabs.billing_adress} timeout="auto">
                                    <Grid className="chCardBody">
                                        <form className="cuponForm">
                                            <Grid container spacing={3}>
                                                <Grid item sm={12} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Nama Lengkap"
                                                        name="nama_lengkap"
                                                        value={forms.name}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        rows="3"
                                                        label="Alamat Lengkap"
                                                        name="address"
                                                        value={forms.address}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                              
                                                <Grid item sm={12} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Email"
                                                        name="email"
                                                        value={forms.email}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="email"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="No. Handphone"
                                                        name="phone"
                                                        value={forms.phone}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        label="Catatan tambahan (Optional)"
                                                        placeholder="Tulis catatan tentang pesanan anda"
                                                        name="note"
                                                        value={forms.note}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone note"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler('payment')}>
                                    Pilih Metode Pembayaran
                                    <FontAwesome name={tabs.payment ? 'minus' : 'plus'}/>
                                </Button>
                                <Grid className="chCardBody">
                                    <Collapse in={tabs.payment} timeout="auto" unmountOnExit>
                                        <RadioGroup className="paymentMethod" aria-label="Payment Method"
                                                    name="payment_method"
                                                    value={forms.payment_method}
                                                    onChange={(e) => changeHandler(e)}>
                                            <FormControlLabel value="bank_transfer" control={<Radio color="primary"/>}
                                                    label="Via Bank Transfer "/>
                                            <FormControlLabel value="cash" control={<Radio color="primary"/>}
                                                            label="Via COD"/>
                                            
                                        </RadioGroup>
                                        <Collapse in={forms.payment_method === 'bank_transfer'} timeout="auto">
                                            <Grid className="cardType">
                                                {cardType.map((item, i) => (
                                                    <Grid
                                                        key={i}
                                                        className={`cardItem ${forms.bank === item.title ? 'active' : null}`}
                                                        onClick={() => setForms({...forms, bank: item.title})}>
                                                        <img src={item.img} alt={item.title}/>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Collapse>
                                        <Collapse in={forms.payment_method === 'bank_transfer'}>
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Nama Lengkap"
                                                        name="bank_holder"
                                                        value={forms.bank_holder}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Nomor Rekening"
                                                        name="bank_number"
                                                        value={forms.bank_number}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={12} xs={12}>
                                                    <p>Untuk kemudahan pengecekan, pastikan Nama Lengkap sesuai dengan Nomor Rekening anda.</p>
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Collapse>
                                </Grid>
                            </Grid>

                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler('delivery')}>
                                    Pilih Pengiriman
                                    <FontAwesome name={tabs.delivery ? 'minus' : 'plus'}/>
                                </Button>
                                <Grid className="chCardBody">
                                    <Collapse in={tabs.delivery} timeout="auto">
                                        <RadioGroup className="deliveryMethod" aria-label="Delivery Method"
                                                    name="delivery"
                                                    value={forms.delivery}
                                                    onChange={(e) => changeHandler(e)}>
                                            
                                            <FormControlLabel value={delivery[0].name} onClick={() => {
                                                
                                                setDeliveryName(delivery[0].name);
                                                setDeliveryFee(delivery[0].biaya);
                                                
                                                setForms({...forms,
                                                    delivery: delivery[0].name,
                                                    delivery_price: delivery[0].biaya,
                                                    total: totalPrice(cartList) + deliveryFee
                                                });

                                            }} control={<Radio color="primary"/>}
                                                    label={`${delivery[0].name.toUpperCase()} (Rp${new Intl.NumberFormat().format(delivery[0].biaya)}), 3 - 6 hari | Estimasi tiba ${getDeliveryEstimation(3)} - ${getDeliveryEstimation(6)}`}/>
                                            
                                            <FormControlLabel value={delivery[1].name} onClick={() => {
                                                setDeliveryName(delivery[1].name);                                                
                                                setDeliveryFee(delivery[1].biaya);

                                                setForms({...forms, 
                                                    delivery: delivery[0].name,
                                                    delivery_price: delivery[0].biaya,
                                                    total: totalPrice(cartList) + deliveryFee
                                                });                                                

                                            }} control={<Radio color="primary"/>}
                                                            label={`${delivery[1].name.toUpperCase()} (Rp${new Intl.NumberFormat().format(delivery[1].biaya)}), 5 - 11 hari | Estimasi tiba ${getDeliveryEstimation(5)} - ${getDeliveryEstimation(11)}`}/>
                                            
                                        </RadioGroup>
                                    </Collapse>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid className="formFooter mt-20">

                                        <Collapse in={forms.delivery === 'reguler' || forms.delivery === 'ekonomi'} timeout="auto">
                                            <Grid className="cardType">
                                                <Link to='#' onClick={() => submit()} className="cBtn cBtnLarge cBtnTheme mt-20 ml-15" type="submit">Proses Checkout</Link>
                                            </Grid>
                                        </Collapse>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Grid className="cartStatus">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grid className="cartTotals">
                                        <h4>Cart Total</h4>
                                        <Table>
                                            <TableBody>
                                                {cartList.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell>{item.title} Rp{new Intl.NumberFormat().format(item.price)} x {item.qty}</TableCell>
                                                        <TableCell
                                                            align="right">Rp{new Intl.NumberFormat().format(item.qty * item.price)}</TableCell>
                                                    </TableRow>
                                                ))}                                                
                                                <TableRow className="totalProduct">
                                                    <TableCell>Total pesanan</TableCell>
                                                    <TableCell align="right">{cartList.length}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Pengiriman{deliveryName == '' ? '':`: ${deliveryName.toUpperCase()}`}</TableCell>
                                                    <TableCell
                                                        align="right">Rp{new Intl.NumberFormat().format(deliveryFee)}</TableCell>
                                                </TableRow>                                                
                                                <TableRow>
                                                    <TableCell>Sub Harga</TableCell>
                                                    <TableCell align="right">Rp{new Intl.NumberFormat().format(totalPrice(cartList))}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Total Harga</TableCell>
                                                    <TableCell
                                                        align="right">Rp{new Intl.NumberFormat().format(totalPrice(cartList) + deliveryFee)}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
};


export default CheckoutSection;