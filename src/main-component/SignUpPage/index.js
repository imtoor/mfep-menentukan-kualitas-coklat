import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, withRouter} from "react-router-dom";


import './style.scss';

const SignUpPage = (props) => {
    const [value, setValue] = useState({
        email: '',
        phone: '',        
        full_name: '',
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {

            localStorage.setItem('full_name', value.full_name)
            localStorage.setItem('email', value.email)
            localStorage.setItem('phone', value.phone)            
            localStorage.setItem('password', value.password)
            localStorage.setItem('isLogin', 0)            

            setValue({
                email: '',
                phone: '',
                full_name: '',
                password: '',
                confirm_password: '',
            });

            validator.hideMessages();
            toast.success('Registration Complete successfully!');
            props.history.push('/login');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Daftar</h2>
                <p>Daftar akun</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder=""
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="Nama Lengkap"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.full_name, 'required|alpha_space')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Contoh: coklatku@gmail.com"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Contoh: 0821xxxxxxxx"
                                value={value.phone}
                                variant="outlined"
                                name="phone"
                                label="No. Handphone"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('phone', value.phone, 'required|phone')}
                        </Grid>                        
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder=""
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="password"
                                className="inputOutline"
                                fullWidth
                                placeholder=""
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, `in:${value.password}`)}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Daftar</Button>
                            </Grid>

                            <p className="noteHelp">Already have an account? <Link to="/login">Kembali ke Login</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
        </Grid>
    )
};

export default withRouter(SignUpPage);