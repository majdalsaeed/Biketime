import React from 'react';
import '../KundenKonto/KundenKonto.css';


function KundenKonto() {
    return ( 
     <div>
        <form className="form">
            <div className="form-header">
            <h2>Create new Account</h2>
            </div>
            <div className="form-inputs">
                <label className="form-label" id="username">username:</label>
                <input type="text" name="username" className="form-input" placeholder="Enter your username" />
            </div>
            <div className="form-inputs">
                <label className="form-label" id="email">E-mail:</label>
                <input type="email" name="email" className="form-input" placeholder="Enter your E-mail" />
            </div>
            <div className="form-inputs">
                <label className="form-label">Password:</label>
                <input type="text" name="password" className="form-input" placeholder="Enter your password" />
            </div>
            <div className="form-inputs">
                <label className="form-label">Password confirmation:</label>
                <input type="text" name="password" className="form-input" placeholder="Confirm your password" />
            </div>
            <button className="btn" type="submit">Create Account</button>
            <span className="form-input-login">Already have an account? Login <a href="#" >here</a> </span>
        </form>
    </div>
    );
}
export default KundenKonto;