import React from 'react'
import '../css/Welcome.css'
// Örnek olarak elindeki resimlerden birini import ettim.
// İstersen buraya 'welcome.jpg' diye yeni bir resim ekleyip onu çağırabilirsin.
import WelcomeImage from '../images/kız-kulesi.jpg'
// Header'ı buradan kaldırdım çünkü Welcome ekranı genelde fullscreen olur ve menü içermez.
// Kullanıcı 'Başla' dediğinde ana ekrana ve menüye ulaşır.

function Welcome({ onStart }) {
    return (
        <div className='welcome-wrapper'>
            {/* Arka plan görseli için css kullanacağız ama görseli buradan prop olarak da geçebiliriz */}
            
            <div className='welcome-container'>
                <div className='welcome-content'>
                    <div className='welcome-text'>
                        <span className="welcome-subtitle">KEŞFETMEYE HAZIR MISIN?</span>
                        <h1>İstanbul'un Kalbine Yolculuk</h1>
                        <p>İstanbul'un eşsiz güzelliklerini keşfetmeye hazır mısın? Camilerden tarihi mekanlara, senin için hazırladığımız özel rehber burada.</p>
                        <button className='btn-start' onClick={onStart}>
                            Hemen Başla 
                            <span className="arrow">→</span>
                        </button>
                    </div>
                    <div className='welcome-image-box'>
                        {/* Görsel etrafına dekoratif elementler ekledik CSS ile */}
                        <img src={WelcomeImage} alt="İstanbul Karşılama" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome