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
            <div className={`check-mark-container ${isSelected ? 'active' : ''}`}>
               {isSelected && <div className="check-mark">✓</div>}
            </div>

            <div className="card-image-wrapper">
                {/* Width ve Height CSS'den gelecek */}
                <img src={image} alt={title} />
                <div className="card-overlay"></div>
            </div>

            <div className="place-content">
                <h4>{title}</h4>
                <p className="description">{description}</p>
                
                {/* Footer kısmını sabitlemek için */}
                <div className="card-footer">
                     {/* Senin orijinal linkin burada duruyor, istersen kaldırabilirsin */}
                    <a href={link} target='_blank' rel="noopener noreferrer"
                        onClick={(e) => { e.stopPropagation(); }}>
                        Detaylı İncele →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Place