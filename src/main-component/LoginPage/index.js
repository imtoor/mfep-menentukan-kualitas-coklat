import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link, withRouter} from "react-router-dom";

import './style.scss';

const LoginPage = (props) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {

            validator.hideMessages();

            const email = value.email;
            const password = value.password;

            if (email.includes("@")) {
                let loginUrl = process.env.REACT_APP_MODE === 'prod' ? process.env.REACT_APP_PROD_API_ENDPOINT + process.env.REACT_APP_LOGIN_USER:process.env.REACT_APP_DEV_API_ENDPOINT + process.env.REACT_APP_LOGIN_USER
                fetch(loginUrl, {
                    method: 'POST',
                    body: JSON.stringify({email: email, password, password}),
                    headers: {'Content-Type':'application/json; chartset=UTF-8'}
                }).then(response => {

                    let res = response.json();

                    res.then(data => {

                        if (data.success) {
                            toast.success(data.message);

                            localStorage.setItem('id', data.data.id)
                            localStorage.setItem('full_name', data.data.name)
                            localStorage.setItem('email', data.data.email)
                            localStorage.setItem('phone', data.data.phone)
                            localStorage.setItem('isLogin', 1)                            

                            setTimeout(() => {
                                props.history.push('/')
                            }, 1000);
                        } else {
                            toast.error(data.message);
                        }

                    })

                })

            }
        } else {
            validator.showMessages();
            toast.error('Harap isi email dan password');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Sign In</h2>
                <p>Masuk ke dalam akun anda 👈</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
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
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
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
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label="Ingat Saya"
                                />
                                <Link to="/forgot-password">Lupa Sandi ?</Link>
                            </Grid>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Login</Button>&nbsp;
                                <Button fullWidth className="cBtnTheme" type="button">
                                    <Link to="/" style={{color:'#ffffff'}}>Home</Link>
                                </Button>

                            </Grid>

                            <p className="noteHelp">Belum punya akun ? <Link to="/register">Buat akun</Link>
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

export default withRouter(LoginPage);