import React, { useState } from 'react'
import Header from './components/Header'
import { places } from './Data'
import Place from './components/Place'
import './App.css' // CSS dosyanı import etmeyi unutma
import Welcome from './components/Welcome'
import Loading from './components/Loading' // YENİ: Loading bileşenini ekledik

function App() {

  // Ekran kontrolü için yeni bir state (Değişken)
  const [showWelcome, setShowWelcome] = useState(true);
  
  // YENİ: Yükleme ekranını kontrol edecek state
  const [isLoading, setIsLoading] = useState(false);

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
    const baseUrl = "https://www.google.com/maps/dir/";

    // Yer isimlerini aralarına "/" koyarak birleştiriyoruz
    const destinationPath = selectedTitles.join("/");

    // Sonuç şöyle olacak: https://www.google.com/maps/dir//Kız Kulesi/Galata Kulesi
    window.open(baseUrl + "/" + destinationPath, "_blank");
  };

  // YENİ: Uygulamayı başlatan ve Loading ekranını devreye sokan fonksiyon
  const handleStartApp = () => {
    // 1. Karşılama ekranını kapat
    setShowWelcome(false);
    // 2. Yükleme ekranını aç
    setIsLoading(true);

    // 3. 2 saniye bekle ve yükleme ekranını kapatıp ana ekrana geç
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
  };

  // EĞER showWelcome TRUE İSE SADECE KARŞILAMA EKRANINI GÖSTER
  if (showWelcome) {
    // onStart tetiklendiğinde artık handleStartApp çalışacak
    return <Welcome onStart={handleStartApp} />
  }

  // YENİ: EĞER isLoading TRUE İSE YÜKLEME EKRANINI GÖSTER
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="app-container">
      {/* Header'a setQuery fonksiyonunu yolluyoruz ki oradan bu state'i güncelleyebilelim */}
      <Header setSearch={setQuery} />

      {/* --- YENİ EKLENEN KISIM: KULLANIM TALİMATI --- */}
      <div className="info-container">
        <div className="info-box">
            <h2>✨ Kendi Rotanı Oluştur</h2>
            <p>
                Aşağıdaki listeden gitmek istediğin yerlere tıklayarak seç (✅). 
                Ardından <b>"Rotayı Oluştur"</b> butonuna basarak Google Maps üzerinde sana özel gezi planını gör!
            </p>
        </div>
      </div>

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