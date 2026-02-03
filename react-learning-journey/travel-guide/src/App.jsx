import React, { useState } from 'react'
import Header from './components/Header'
import { places } from './Data'
import Place from './components/Place'
import './App.css' // CSS dosyanı import etmeyi unutma
import Welcome from './components/Welcome'

function App() {

  // Ekran kontrolü için yeni bir state (Değişken)
  const [showWelcome, setShowWelcome] = useState(true);
  // Arama kelimesini tutacak state (değişken)
  const [query, setQuery] = useState("");
  // SEÇİLEN YERLERİ TUTACAK STATE (DİZİ)
  const [selectedPlaceIds, setSelectedPlaceIds] = useState([]);

  // FİLTRELEME MANTIĞI:
  // Eğer query boşsa hepsini göster, değilse başlığa göre filtrele
  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(query.toLowerCase())
  );

  // KARTA TIKLAYINCA SEÇME/ÇIKARMA FONKSİYONU
  const toggleSelectPlace = (id) => {
    if (selectedPlaceIds.includes(id)) {
      // Zaten seçiliyse listeden çıkar
      setSelectedPlaceIds(selectedPlaceIds.filter(itemId => itemId !== id));
    } else {
      // Seçili değilse listeye ekle
      setSelectedPlaceIds([...selectedPlaceIds, id]);
    }
  };

  // ROTA OLUŞTURMA FONKSİYONU (GOOGLE MAPS)
  const createRoute = () => {
    // Sadece seçilen yerlerin "title" (başlık) bilgisini bulalım
    const selectedTitles = places
      .filter(place => selectedPlaceIds.includes(place.id))
      .map(place => place.title);

    if (selectedTitles.length === 0) return;

    // Google Maps Link Formatı: https://www.google.com/maps/dir/Başlangıç/Yer1/Yer2...
    // "My Location" diyerek kullanıcının konumunu başlangıç yapıyoruz.
    const baseUrl = "https://www.google.com/maps/dir/My+Location/";

    // Yer isimlerini aralarına "/" koyarak birleştiriyoruz
    const destinationPath = selectedTitles.join("/");

    // Yeni sekmede aç
    window.open(baseUrl + destinationPath, "_blank");
  };

  // EĞER showWelcome TRUE İSE SADECE KARŞILAMA EKRANINI GÖSTER
  if (showWelcome) {
    return <Welcome onStart={() => setShowWelcome(false)} />
  }

  return (
    <div>
      {/* Header'a setQuery fonksiyonunu yolluyoruz ki oradan bu state'i güncelleyebilelim */}
      <Header setSearch={setQuery} />

      {/* Container ile sarmaladık */}
      <div className="main-container">
        {filteredPlaces.map((place) => (
          <Place
            key={place.id}
            place={place}
            // 4. Props olarak seçili olup olmadığını ve tıklama fonksiyonunu yolluyoruz
            isSelected={selectedPlaceIds.includes(place.id)}
            onToggle={() => toggleSelectPlace(place.id)}
          />
        ))}
      </div>

      {/* 5. ROTA OLUŞTUR BUTONU (Sadece en az 1 yer seçiliyse görünür) */}
      {selectedPlaceIds.length > 0 && (
        <div className="route-bar">
          <div className="route-info">
            {selectedPlaceIds.length} yer seçildi
          </div>
          <button onClick={createRoute} className="btn-route">
            Rotayı Oluştur 📍
          </button>
        </div>
      )}
    </div>
  )
}

export default App