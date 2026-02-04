import React, { useState } from 'react'
import '../css/Welcome.css'
// Data'daki yerleri import ediyoruz ki resimlerini kullanalım
import { places } from '../Data' 

function Welcome({ onStart }) {
    // Hangi kartın en üstte olduğunu tutan state (0'dan başlar)
    const [activeIndex, setActiveIndex] = useState(0);
    // Animasyonun çalışıp çalışmadığını kontrol eden state
    const [isAnimating, setIsAnimating] = useState(false);

    // Karta tıklama fonksiyonu
    const handleCardClick = () => {
        if (isAnimating) return; // Zaten animasyon varsa tekrar basamasın

        setIsAnimating(true); // Animasyonu başlat (Kartı uçur)

        // 0.3 saniye (CSS süresi kadar) bekle, sonra sıradaki karta geç
        setTimeout(() => {
            // Modulo (%) operatörü ile döngü sağlarız. Sona gelince başa döner.
            setActiveIndex((prevIndex) => (prevIndex + 1) % places.length);
            setIsAnimating(false); // Animasyonu bitir, yeni kart yerine otursun
        }, 600);
    };

    // Şu anki ve bir sonraki kartın bilgilerini alalım
    const currentPlace = places[activeIndex];
    const nextPlace = places[(activeIndex + 1) % places.length];

    return (
        <div className='welcome-wrapper'>
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
                    
                    {/* --- DEĞİŞEN KISIM: KART DESTESİ ALANI --- */}
                    <div className='welcome-image-box' onClick={handleCardClick}>
                        
                        {/* 1. ARKADAKİ KART (Sıradaki Resim) */}
                        {/* Bu kart sabit durur, öndeki gidince bu görünür olur */}
                        {/* --- DEĞİŞEN KISIM: Back Card'a da animasyon sınıfı ekledik --- */}
                        <div className={`card-stack-item back-card ${isAnimating ? 'slide-in' : ''}`}>
                            <img src={nextPlace.image} alt="Next Place" />
                        </div>

                        {/* 2. ÖNDEKİ KART (Şu anki Resim) */}
                        {/* isAnimating true ise 'slide-out' sınıfını ekle */}
                        <div className={`card-stack-item top-card ${isAnimating ? 'slide-out' : ''}`}>
                            <img src={currentPlace.image} alt={currentPlace.title} />
                            
                            {/* İsteğe bağlı: Resmin üzerine küçük bir etiket */}
                            <div className="card-badge">
                                📍 {currentPlace.title}
                            </div>
                        </div>

                    </div>
                    {/* --- DEĞİŞEN KISIM SONU --- */}

                </div>
            </div>
        </div>
    )
}

export default Welcome