import React from 'react'
import '../css/Welcome.css'
// Örnek olarak elindeki resimlerden birini import ettim.
// İstersen buraya 'welcome.jpg' diye yeni bir resim ekleyip onu çağırabilirsin.
import WelcomeImage from '../images/kız-kulesi.jpg'
import Header from '../components/Header'

function Welcome({ onStart }) {
    return (
        <div>
            <div><Header /></div>
            <div className='welcome-container'>
                <div className='welcome-content'>
                    <div className='welcome-text'>
                        <h1>Travel Guide ISTANBUL</h1>
                        <p>İstanbul'un eşsiz güzelliklerini keşfetmeye hazır mısın? Camilerden tarihi mekanlara, senin için hazırladığımız özel rehber burada.</p>
                        <button className='btn-start' onClick={onStart}>Keşfetmeye Başla</button>
                    </div>
                    <div className='welcome-image'>
                        <img src={WelcomeImage} alt="İstanbul Karşılama" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome