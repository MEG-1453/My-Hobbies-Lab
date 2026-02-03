import React from 'react'
import '../css/PlacesCards.css'

// Props kısmına isSelected (seçili mi?) ve onToggle (seçme fonksiyonu) eklendi
function Place({ place, isSelected, onToggle }) {
    const { id, title, description, link, image } = place;

    return (
        <div
            // Seçiliyse 'selected-card' sınıfını da ekliyoruz
            className={`place-card ${isSelected ? 'selected-card' : ''}`}
            onClick={onToggle} // Karta tıklayınca seç/kaldır
        >
            {/* EĞER SEÇİLİYSE SAĞ ÜSTTE TİK İŞARETİ GÖSTER */}
            {isSelected && <div className="check-mark">✅</div>}

            <div>
                <img src={image} width={275} height={200} alt={title} />
                <h4>{title}</h4>
                <h5>{description}</h5>
                {/* Senin orijinal linkin burada duruyor, istersen kaldırabilirsin */}
                <a href={link} target='_blank' rel="noopener noreferrer"
                    onClick={(e) => { e.stopPropagation(); }}>Detaylı Bilgi İçin Lütfen Tıklayın.</a>
            </div>
        </div>
    )
}

export default Place