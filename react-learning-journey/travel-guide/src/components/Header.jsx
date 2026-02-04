import React from 'react'
import '../css/Header.css' 

function Header({setSearch}) {
    return (
        <div>
            <div className='header'>
                <div className="logo-area">
                    Travel Guide 
                    <span className="brand-badge">MEG</span>
                </div>
                
                <div className="header-right">
                    <input
                        type="text"
                        placeholder="Rota ara... 🔍"
                        className="search-input"
                        onChange={(e) => setSearch(e.target.value)} // Her harf girildiğinde çalışır
                    />
                    <button className="btn-profile">Profil</button>
                </div>
            </div>
        </div>
    )
}

export default Header