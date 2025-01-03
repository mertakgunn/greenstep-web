import React from "react";
import Header from "./header";
import Footer from "./footer";

const Su = () => {
  return (
    <div className="information-container bg-gray-300">
      <div className="">
        <Header />
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black pl-2 py-2 text-xl font-poppins font-semibold text-start ">
            SU İSRAFINI AZALTMAK İÇİN SİZE ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Ellerimizi yıkarken, diş fırçalarken ve tıraş olurken suya
            ihtiyacımız olmadığı anlarda musluğu kapatarak su kullanımını günde
            23 litre azaltabilirsiniz.
            <br />
            • Su tesisatındaki sızıntıları önleyerek su kullanımını yılda 660
            damacanaya kadar azaltabiliriz.
            <br />
            • Duş süremizi 7 dakika veya altına indirerek su kullanımını yılda
            55 ton azaltabilirsiniz.
            <br />
            • Çamaşır ve bulaşık makinelerini tam dolu bir şekilde çalıştırarak
            su kullanımını azaltabilirsiniz.
            <br />
            • Araba, halı ve balkonları tasarruflu yöntemlerle temizleyerek,
            mümkünse sadece silerek su kullanımını azaltabilirsiniz.
            <br />• Sebze ve meyveleri yıkarken su dolu kap kullanarak su
            kullanımını azaltabilirsiniz.
          </p>
          <p className="mt-4">Yazar: Sıla Koç</p>
          <p className="">Tarih: 26.11.2024</p>
        </div>
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black text-xl pl-2 py-2 font-poppins font-semibold text-start  ">
            SUYU YENİDEN KULLANIMA KATMAK İÇİN SİZE ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Yağmur suyu hasadı yaparak, kazanılan suyu özellikle bahçe
            sulamada yeniden kullanabilirsiniz. • Gri su sistemi ile lavabo ve
            duşlarda kullanılan suyu sifon suyu olarak yeniden
            kullanabilirsiniz. <br /> • Sebze ve meyveleri yıkamak için
            kullanılan suyu, çiçek sulamada vb. yerlerde yeniden
            kullanabilirsiniz. <br /> • Ev tipi arıtma sistemleri ürettikleri
            suyun birkaç katını kullanır ve bu suyun bir kısmı "atıksuya"
            dönüşür. Oluşan temiz “atıksuyu" bir haznede toplayarak temizlikte
            yeniden kullanabilirsiniz. <br /> • Suyun ısınmasını beklerken akan
            suyu toplayarak temizlikte, çiçek sulamada yeniden
            kullanabilirsiniz.
          </p>
          <p className="mt-4">Yazar: Minel Sevgen</p>
          <p className="">Tarih: 22.11.2024</p>
        </div>
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black text-xl pl-2 py-2 font-poppins font-semibold text-start  ">
            SU KULLANIMINI AZALTMAK İÇİN DEĞİŞTİREBİLECEĞİNİZ ŞEYLER
            ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Klasik muslukları, sensörlü ve düşük basınçlı musluk, batarya ve
            perlatör ile değiştirerek %50 su tasarrufu sağlayabilirsiniz.
            <br />
            • Klasik duş başlıklarını düşük akışlı, eko havalandırmalı duş
            başlıkları ile değiştirerek su tasarrufu sağlayabilirsiniz.
            <br />
            • Çok su harcayan tuvalet rezervuarını 4 litrelik ultra düşük
            rezervuar ile değiştirerek %75 su tasarrufu sağlayabilirsiniz.
            <br />
            • Sızdıran ve arızalı tesisatı tamir ederek veya yenisi ile
            değiştirerek su israfını önleyebilirsiniz.
            <br />
            • Peyzaj alanlarındaki çok su tüketen bitkileri kuraklığa dayanıklı
            ve az su isteyen bitkiler ile değiştirerek su tasarrufu
            sağlayabilirsiniz.
            <br />• Çamaşır ve bulaşık makinesi satın alırken, su ve enerjiyi
            verimli kullanan modelleri tercih ederek daha az su
            tüketebilirsiniz.
          </p>
          <p className="mt-4">Yazar: Sıla Koç</p>
          <p className="">Tarih: 20.11.2024</p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Su;
