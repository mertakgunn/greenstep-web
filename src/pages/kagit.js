import React from "react";
import Header from "./header";
import Footer from "./footer";

const Kagit = () => {
  return (
    <div className="information-container bg-gray-300">
      <div className="">
        <Header />
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black pl-2 py-2 text-xl font-poppins font-semibold text-start  ">
            KAĞIT İSRAFINI AZALTMAK İÇİN SİZE ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Kağıt kaybının azaltılmasının en etkili yollarından biri,
            belgeleri dijital olarak korumaktır. Dosyalar, raporlar ve belgeler
            dijital arşivlerde saklanabilir.
            <br /> • Elektronik imzanın kullanılması, kopyaların basılmasına
            gerek kalmadan yasal olarak geçerliliğe sahip olunmasını sağlar.
            <br /> • Toplantı ve ders notları için dijital not alma
            uygulamalarını (örneğin OneNote, Evernote) kullanarak kağıt
            tüketimini azaltabilirsiniz.
            <br /> • Yazıcılarda varsayılan olarak çift taraflı yazdırma ayarını
            etkinleştirin. Bu, kağıt tüketimini yarıya azaltır.
            <br /> • Yanlış yazdırılan veya kullanılan kağıtları yeniden
            kullanarak kağıt tüketimini azaltabilirsiniz.
            <br /> • Yazdırma işleminde 2 sayfayı mümkünse tek yaprağa
            sığdırarak kağıt israfını azaltabilirsiniz.
          </p>
          <p className="mt-4">Yazar: Sıla Koç</p>
          <p className="">Tarih: 21.11.2024</p>
        </div>
        <div className="p-8 bg-gray-100 ml-12 mr-12 rounded-3xl mt-8 mb-8 flex items-start flex-col">
          <h1 className="text-black text-xl pl-2 py-2 font-poppins font-semibold text-start  ">
            KAĞIT GERİ DÖNÜŞÜMÜ VE YENİDEN KULLANIMI İÇİN SİZE ÖNERİLERİMİZ
          </h1>
          <p className="text-black text-lg font-poppins font-normal text-start mt-4">
            • Yeni kağıt satın alırken geri dönüştürülmüş kağıt kullanarak
            büyüme etkilerini azaltabilirsiniz.
            <br /> • Belgeyi yazdırmadan önce gerçekten gerekli olup olmadığını
            kontrol edin. Dijital paylaşım ve görüntüleme çoğu zaman yeterlidir.
            <br /> • Yazıcınızın "baskı öncesi görüntü" özelliğini kullanarak,
            yazdıracağınız belgelerin gereksiz sayfalar içermediğinden emin
            olun.
            <br /> • Google Drive, Dropbox gibi bulut tabanlı dosya paylaşım
            platformları kullanarak belgelerin dijital olarak birleştirilmesi ve
            kağıt kullanımının azaltılması sağlanabilir.
            <br /> • Kurumlar, kağıt tasarrufunun önemi ve nasıl günlük olarak
            tasarruf sağlanabilir düzenli eğitimler verebilirler.
          </p>
          <p className="mt-4">Yazar: Mert Akgün</p>
          <p className="">Tarih: 27.11.2024</p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Kagit;
