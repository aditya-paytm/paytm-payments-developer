import React, { Component } from 'react';
import * as style from './style.module.scss';

class HostedEcomWeb extends Component {
    render() {
    return (
        <div className={`${style.ecomPlatform} grid justify-between`}>
            <div className={`${style.ecomCard}`}>
                <a href='' className={`${style.cardLink} grid justify-between align-center`} >
                    <span className={`grid justify-between align-center`}>
                        <img src='/assets/logo-martjack.png' alt='martjack-logo'/>
                        <label>Martjack</label>
                    </span>
                </a>
            </div>
            <div className={`${style.ecomCard}`}>
                <a href='' className={`${style.cardLink} grid justify-between align-center`} >
                    <span className={`grid justify-between align-center`}>
                        <img src='/assets/logo-zepo.png' alt='zepo-logo'/>
                        <label>Zepo</label>
                    </span>
                </a>
            </div>
            <div className={`${style.ecomCard}`}>
                <a href='' className={`${style.cardLink} grid justify-between align-center`} >
                    <span className={`grid justify-between align-center`}>
                        <img src='/assets/logo-kartrocket.png' alt='kartrocket-logo'/>
                        <label>Kartrocket</label>
                    </span>
                </a>
            </div>
            <div className={`${style.ecomCard}`}>
                <a href='' className={`${style.cardLink} grid justify-between align-center`} >
                    <span className={`grid justify-between align-center`}>
                        <img src='/assets/logo-ecomchain.png' alt='ecomchain-logo'/>
                        <label>Ecomchain</label>
                    </span>
                </a>
            </div>
            <div className={`${style.ecomCard}`}>
                <a href='' className={`${style.cardLink} grid justify-between align-center`}>
                    <span className={`grid justify-between align-center`}>
                        <img src='/assets/shopify.png' alt='shopify-logo'/>
                        <label>Shopify</label>
                    </span>
                </a>
            </div>
            
            
        </div>
    );
    }
}

export default HostedEcomWeb;