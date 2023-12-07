function Login() {
    return (
        <>
            <div className="row" style={{ marginLeft: '300px', backgroundColor: '#fff0f5', marginRight: '300px', border: '2px solid black', marginBottom: '100px', marginTop: '50px' }} >
                <div className="col-6 ps-0" style={{ width: '50%' }} >
                    <img src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="Shion House" />
                </div>

                <div className="col-6 mt-5" style={{ width: '50%' }}>
                    <div className="container">
                        <div>
                            <h1><b>SHION HOUSE</b></h1>
                        </div>
                        <div>
                            <p><b>Hey there!<br />
                                Welcome back to Zarah Fashion.</b></p>
                            <form className="mt-5 " style={{ fontSize: '15px' }}>
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email or Phone Number" style={{ width: '100%', height: '40px', fontSize: '16px' }} aria-describedby="emailHelp" />

                                    <div id="emailHelp" className="mt-2" style={{ textAlign: 'center', color: 'red' }}>Login with phone?</div>

                                </div>
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                                    <input type="password" className="form-control" style={{ width: '100%', height: '40px', fontSize: '16px' }} placeholder="Password" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me    </label>

                                </div>
                               
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button class="btn-lg btn-primary" type="button">Sign in</button>
                                </div>
                                <span className="mb-4" style={{ color: 'red', marginLeft: '200px' }}>Forgot Password ?</span>

                                {/* <p> Don't have an Account</p> */}
                            </form>
                            <div>
                                <img src=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
