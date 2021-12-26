import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-md-6">
                        <h3>SHOP~ZONE</h3>
                        <ul className="list-unstyled">
                            <h4>Phone: 019999929999</h4>
                            <h4>Email: SHOP@gmail.com</h4>
                            <h4>FaceBook: Shop~Zone@facebook.com</h4>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        &copy;{new Date().getFullYear()} City Guide App -All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;