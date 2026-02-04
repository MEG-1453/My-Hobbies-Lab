import React from 'react'
import '../css/Loading.css'

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        
        {/* Uçak İkonu ve Animasyonu */}
        <div className="plane-wrapper">
            <span className="plane-icon">✈️</span>
        </div>

        {/* Yazılar */}
        <h2>Rotanız Hazırlanıyor...</h2>
        <p>İstanbul'un eşsiz mekanları listeleniyor</p>

        {/* İlerleme Çubuğu (Loading Bar) */}
        <div className="progress-bar-container">
            <div className="progress-bar"></div>
        </div>

      </div>
    </div>
  )
}

export default Loading