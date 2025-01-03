import React from "react";
import Header from "./header";
import Footer from "./footer";

const Plastik = () => {
  return (
    <div className="information-container bg-gray-300">
      <div className="">
        <Header />
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black pl-2 py-2 text-xl font-poppins font-semibold text-start ">
            PLASTİK KULLANIMINI AZALTMAK İÇİN SİZE ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Tek kullanımlık plastik şişeler, poşetler, bardaklar, çatal
            bıçakları ve pipetler yerine, tekrar kullanılabilir alternatifler
            tercih edin. Su şişenizi, kahve kupanızı, yemek kaplarınızı ve
            tekrar kullanılabilir çatal bıçak takımınızı yanınızda taşıyın.
            Alışveriş yaparken kendi bez çantanızı kullanın.
            <br />• Ambalajı mümkün olduğunca az olan ürünleri tercih edin.
            Toplu halde üretilen ürünleri tercih edin. Ambalajı geri
            dönüştürülebilen ürünler tercih edebilirsiniz.
            <br />• Plastik atıklarınızı doğru şekilde geri dönüştürün. Yerel
            geri dönüşümleri öğrenin ve farklı plastik türlerinin (örneğin, PET,
            HDPE, PVC) geri dönüşümlerindeki farklılıklarını anlayın.
            <br />• Biyolojik olarak parçalanabilir plastikler varsa, bunları
            kompostlaştırabilirsiniz. Ancak tüm plastikler biyolojik olarak
            parçalanabilir değildir.
            <br />• Plastik yerine bambu, ahşap, cam, metal veya biyolojik
            olarak parçalanabilir yapılmış ürünler tercih edin.
          </p>
          <p className="mt-4">Yazar: Yağmur Çoban</p>
          <p className="">Tarih: 24.11.2024</p>
        </div>
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black text-xl pl-2 py-2 font-poppins font-semibold text-start  ">
            PLASTİKLERİN YENİDEN KULLANIMI İÇİN SİZE ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Temizlenmiş plastik şişeleri, sulama kabı, çiçek vazosu veya
            saklama kabı olarak yeniden kullanabilirsiniz. Ancak gıda ile
            iletişimin yayılmasını önleyin.
            <br />
            • Plastik şişeleri, kapları veya diğer plastik atakları, çeşitli el
            sanatları projeleri için yeniden kullanın.
            <br />• Plastik poşetleri, çöp poşeti olarak veya diğer küçük
            eşyaların saklanması için tekrar kullanabilirsiniz.
          </p>
          <p className="mt-4">Yazar: Sıla Koç</p>
          <p className="">Tarih: 27.11.2024</p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Plastik;
