import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../assets/greenstepm.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="flex justify-between z-20 relative">
          <img
            src="../assets/greensteplogo.png"
            alt="GreenStep Logo"
            className="flex justify-between ml-10 mt-8"
          />
          <div className="flex mr-12 mt-16 space-x-12">
            <a
              href="#"
              className="text-[#FFFFFF] mt-2 font-poppins hover:text-green-700"
            >
              Ana Sayfa
            </a>

            <a
              href="/information"
              className="text-[#FFFFFF] mt-2 font-poppins hover:text-green-700"
            >
              Bilgilendirme
            </a>
            <button
              onClick={handleClick}
              className="bg-[#32B347] text-white px-4 py-2 rounded-lg w-40 h-11 hover:bg-green-600"
            >
              Giriş Yap
            </button>
          </div>
        </div>

        <div className="justify-start ml-24 mt-14 z-20 relative">
          <h1 className="text-6xl font-bold text-white mb-4 text-start">
            Bugün Çevreci Olun <br />
            Yarının Dünyasını{" "}
            <span className="text-[#F6D107]">Kurtarın...</span>
          </h1>
          <div>
            <h2 className="w-[600px] pt-24 text-xl text-white font-poppins text-start">
              GreenStep, sürdürülebilir bir yaşam tarzı benimsemenizi sağlayan
              çevre dostu bir platformdur.Geri dönüşüm süreçlerini takip eder,
              sürdürülebilirlik hedeflerinizi destekler ve çevre bilincini
              artırır.
            </h2>
          </div>
          <button
            className="text-white bg-[#32B347] hover:bg-green-600 px-9 py-3 mt-8 w-48 h-12 rounded-2xl flex justify-start transition-colors duration-300"
            onClick={handleClick}
          >
            Hadi Başlayalım!
          </button>
        </div>
      </div>
      <div className="bg-[#F8FFF7] h-full">
        <div>
          <h1 className="font-poppins text-xl py-12">
            Trakya Üniversitesi, çevre bilincini artırarak sürdürülebilir bir
            gelecek için harekete geçiyor!
          </h1>
          <Swiper
            slidesPerView={6}
            spaceBetween={0}
            centeredSlides={true}
            speed={5000}
            loop={true}
            interval={5000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="../assets/tü1.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/greenstepgeri.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/tü2.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="../assets/cevkopng.png"
                alt="Trakya Üniversitesi"
                className="w-36 h-24"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/images2.jpg"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="../assets/sks.png"
                alt="Trakya Üniversitesi"
                className="w-36 h-24"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="../assets/tü1.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/greenstepgeri.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/tü2.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/greenstepgeri.png"
                alt="Trakya Üniversitesi"
                className="w-24 h-24"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../assets/sks.png"
                alt="Trakya Üniversitesi"
                className="w-36 h-24"
              />
            </SwiperSlide>
          </Swiper>
          <div className="flex mt-24 justify-center items-center">
            <div className="pt-24 pl-16">
              <div>
                <div className="flex pb-4 space-x-4">
                  <img
                    src="../assets/main3photo.png"
                    alt="Trakya Üniversitesi"
                    className="w-[331px] h-[374]"
                  />
                  <img
                    src="../assets/main3photo3.png"
                    alt="Trakya Üniversitesi"
                    className="w-[364px] h-[244px] mt-28"
                  />
                </div>
                <div className="flex space-x-4">
                  <img
                    src="../assets/main3photo2.png"
                    alt="Trakya Üniversitesi"
                    className="w-[331px] h-[248px]"
                  />
                  <img
                    src="../assets/greenstepp2.jpg"
                    alt="Trakya Üniversitesi"
                    className="w-[364px] h-[190px] rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="mt-32 ml-16">
              <h1 className="font-poppins font-semibold text-4xl text-start">
                GreenStep'in Amacı: <br />
                Doğaya Katkı Sağlayan Adımlar{" "}
              </h1>
              <h2 className="w-[600px] text-start font-poppins pt-12 text-xl mt-2">
                GREENSTEP projesi, Trakya Üniversitesi Uygulamalı Bilimler
                Fakültesi bünyesinde hayata geçirilecek, geri dönüşümü ve
                sürdürülebilir yaşamı teşvik etmeyi amaçlayan kapsamlı bir
                projedir.<br></br>
                <br></br> Proje, özellikle üniversite öğrencileri ve
                akademisyenler olmak üzere geniş bir topluluğu hedefleyerek,
                çevresel bilincin artırılmasına ve sürdürülebilir davranışların
                benimsenmesine katkıda bulunmayı amaçlamaktadır fakat şu an web
                sitesi kullanımı akademisyenler için planlanmıştır.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E6F1E4] h-full">
        <h1 className="text-[#004607] text-4xl font-poppins font-semibold pt-20">
          Gelecek Nesiller İçin Doğayı koruyun
        </h1>
        <h2 className="font-poppins text-center text-lg pt-12 ">
          Bugün atacağımız küçük adımlar, yarının dünyasını şekillendirecek.
          Doğal kaynakları korumak, çevre kirliliğini <br />
          azaltmak ve sürdürülebilir bir yaşam tarzı benimsemek, gelecek
          nesillere sağlıklı bir gezegen bırakmanın <br />
          en etkili yollarıdır. Harekete geçin, doğayı koruyun!
        </h2>
        <div className="flex justify-center items-center pt-24 space-x-2">
          <div className="bg-[#199036] w-24 h-24 rounded-full ">
            <img
              src="../assets/icon1.png"
              alt="Icon1"
              className="rounded-full"
            />
            <div>
              <h1 className="font-poppins font-semibold text-[#004607] text-xl py-8">
                Çevreciliğe Adım
              </h1>
            </div>
          </div>
          <img
            src="../assets/linegreenstep.png"
            alt="linegreenstep"
            className="w-24"
          />
          <div className="bg-[#199036] w-24 h-24 rounded-full ">
            <img
              src="../assets/icon2.png"
              alt="Icon1"
              className="rounded-full"
            />
            <div>
              <h1 className="font-poppins font-semibold text-[#004607] text-xl py-8">
                Üyelik
              </h1>
            </div>
          </div>
          <img
            src="../assets/linegreenstep.png"
            alt="linegreenstep"
            className="w-24"
          />
          <div className="bg-[#199036] w-24 h-24 rounded-full ">
            <img
              src="../assets/icon3.png"
              alt="Icon1"
              className="rounded-full h-20 pl-4 mt-2"
            />
            <div>
              <h1 className="font-poppins font-semibold text-[#004607] text-xl py-8">
                Rozetler
              </h1>
            </div>
          </div>
          <img
            src="../assets/linegreenstep.png"
            alt="linegreenstep"
            className="w-24"
          />
          <div className="bg-[#199036] w-24 h-24 rounded-full ">
            <img
              src="../assets/icon4.png"
              alt="Icon1"
              className="rounded-full"
            />
            <div>
              <h1 className="font-poppins font-semibold text-[#004607] text-xl py-8">
                Doğaya Saygı
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            type="video/webm"
            src="/assets/greenstepvideo.mp4"
            className="w-full object-cover   max-w-[1400px] mt-36 mb-16 rounded-3xl "
          />
        </div>
        <div className="relative w-full h-[1560px]">
          <img
            src="../assets/backgroundleaf.png"
            alt="bggreen"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full flex flex-col justify-center items-center space-y-12 mt-36">
            <h1 className="font-poppins font-semibold text-white text-6xl">
              Geleceğimiz İçin Doğayı Koruyalım
            </h1>
            <h2 className="font-poppins  text-white text-lg text-center py-6">
              Doğayı korumak, geleceğimizi korumaktır. Her bireyin katkısıyla,
              doğal kaynaklarımızı sürdürülebilir şekilde kullanabilir,
              çevremizi daha temiz ve <br /> yaşanabilir hale getirebiliriz.
              Küçük adımlar, büyük farklar yaratır; enerji tasarrufu yapmak,
              geri dönüşüme dikkat etmek ve çevre dostu ürünler <br /> kullanmak
              doğaya olan borcumuzu ödememize yardımcı olur. Gelecek nesillere
              daha yeşil bir dünya bırakmak için hep birlikte harekete
              <br /> geçelim ve doğamıza sahip çıkalım.
            </h2>
            <div className="flex">
              <div className="space-y-16">
                <div className="">
                  <div className=" bg-leaf1 bg-center flex flex-col justify-center items-center bg-cover  w-[449px] h-[189px] ">
                    <h1 className="text-white font-semibold text-xl mr-36 mb-4">
                      Doğayı Koru, Geleceği Koru
                    </h1>
                    <h2 className="text-white text-start mr-32 mb-8">
                      Küçük adımlar büyük farklar yaratır.
                      <br /> Doğaya duyarlı seçimler yaparak <br />
                      daha yeşil bir gelecek inşa edebiliriz.
                    </h2>
                  </div>{" "}
                </div>
                <div className="">
                  <div className=" bg-leaf2 bg-center flex flex-col justify-center items-center bg-cover  w-[449px] h-[189px] ">
                    <h1 className="text-white font-semibold text-xl mr-24 mb-4">
                      Yeşil Bir Gelecek İçin Birlikte
                    </h1>
                    <h2 className="text-white text-sm text-start mr-24 mb-8">
                      Birlikte harekete geçerek, <br />
                      sürdürülebilir projelerle doğayı <br /> koruyabilir ve
                      çevremizi güzelleştirebiliriz.
                    </h2>
                  </div>{" "}
                </div>
                <div className="">
                  <div className=" bg-leaf3 bg-center flex flex-col justify-center items-center bg-cover  w-[449px] h-[189px] ">
                    <h1 className="text-white font-semibold text-xl mr-24 mb-4 mt-6">
                      Daha Az Tüket, Daha Fazla Yaşa
                    </h1>
                    <h2 className="text-white text-start  mr-28 mb-8">
                      Gereksiz tüketimi azaltarak, doğanın <br /> kaynaklarını
                      koruyabilir ve daha <br />
                      sürdürülebilir bir yaşam <br />
                      sürebiliriz.
                    </h2>
                  </div>{" "}
                </div>
              </div>
              <img
                src="../assets/greensteplamb.png"
                alt="greensteplamb"
                className="w-[481px] h-[665px] "
              />
              <div className="space-y-16">
                <div className="">
                  <div className=" bg-leafr1 bg-center flex flex-col justify-center items-center bg-cover  w-[449px] h-[189px] ">
                    <h1 className="text-white font-semibold text-xl  ml-28 mb-4">
                      Geri Dönüştür, Geleceği Şekillendir
                    </h1>
                    <h2 className="text-white text-start ml-40 mb-8 ">
                      Atıkları geri dönüştürerek hem çevreye <br />
                      zarar vermekten kaçınabilir hem de geleceğe temiz bir
                      miras bırakabiliriz.
                    </h2>
                  </div>{" "}
                </div>
                <div className="">
                  <div className=" bg-leafr2 bg-center flex flex-col justify-center items-center bg-cover  w-[449px] h-[189px] ">
                    <h1 className="text-white font-semibold text-xl  ml-36 mb-4 mt-6">
                      Enerji Tasarrufu, Temiz Gelecek
                    </h1>
                    <h2 className="text-white text-start ml-40 mb-8">
                      Enerji kullanımında dikkatli olarak karbon ayak izimizi
                      azaltabilir ve doğanın korunmasına katkıda bulunabiliriz.
                    </h2>
                  </div>{" "}
                </div>
                <div className="">
                  <div className=" bg-leafr3 bg-center flex flex-col justify-center items-center bg-cover  w-[449px] h-[189px] ">
                    <h1 className="text-white font-semibold text-xl  ml-20 mb-4 mt-6">
                      Doğayı Sev, Yaşamı Sev
                    </h1>
                    <h2 className="text-white text-start ml-40 mb-8">
                      Doğaya olan sevgimizi küçük alışkanlıklarla gösterelim;
                      çevremizi temiz tutarak dünyamızı daha <br />
                      yaşanabilir hale getirelim.
                    </h2>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FFF7] h-full mt-24 p-16 ">
        <div className="bg-[#F8FFF7] w-full h-full flex items-center justify-center">
          <div className="">
            <div className="">
              <h1 className="font-poppins font-semibold text-4xl text-[#004607] text-start pt-24 pl-16">
                Geri Dönüşüme Katılın ve <br /> Geleceği Birlikte <br />{" "}
                Şekillendirelim.
              </h1>
              <h2 className="font-poppins pt-8 pl-16 text-start w-[650px]">
                GreenStep geri dönüşüm projesine katılarak, birlikte toplumsal
                değişime katkıda bulunma fırsatını yakalayın. Sürdürülebilir
                projemiz çevremize daha fazla fayda sağlayabilir, daha iyi bir
                gelecek için önemli adımlar atabiliriz. Birlikte hareket ederek,
                daha fazla insana ulaşabilir ve etkili değişim yaratabiliriz.
              </h2>
              <a href="/login">
                <button className="text-white bg-[#32B347] hover:bg-green-600 px-9 py-3 mt-8 w-48 h-12 rounded-2xl flex justify-start transition-colors duration-300 ml-16">
                  Hadi Başlayalım!
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end pt-24 pl-36">
            <img
              src="../assets/gorsel22.png"
              alt="Trakya Üniversitesi"
              className="w-[525px] h-[385px]"
            />
            <img
              src="../assets/gorsel23.png"
              alt="Trakya Üniversitesi"
              className="w-[320px] h-[213px]"
            />
          </div>
        </div>
        <div>
          <h1 className="font-poppins text-[#004607] text-4xl pt-24">
            <span className="font-bold">Green</span>
            Bilgiler
          </h1>
          <h2 className="font-poppins text-[#004607] text-xl pt-4">
            Bu bölüm, çevre ve sürdürülebilirlikteki en güncel bilgileri ve
            uzman <br /> görüşlerini paylaşarak okuyucuları bilgilendirir.
          </h2>
        </div>
        <div className="flex justify-center space-x-12 pt-20">
          <div>
            <img
              src="../assets/newsimg1.png"
              alt="newsimage"
              className="w-[418px] h-[277px]"
            />
            <div className="mt-5">
              <h1 className="text-[#004607] text-start font-semibold font-poppins text-lg">
                Plastik israfını azaltmak için size <br />
                önerilerimize göz atın.
              </h1>
              <h2 className="text-start mt-3">
                Tek kullanımlık plastik şişeler, poşetler, bardaklar, çatal{" "}
                <br />
                bıçakları ve pipetler yerine, tekrar kullanılabilir <br />{" "}
                alternatifler tercih edin. Su şişenizi, kahve kupanızı, <br />{" "}
                yemek kaplarınızı ve tekrar...
              </h2>
              <a href="/information/plastik">
                <button className="text-white bg-[#F49939] hover:bg-[#F6D107] px-11 py-3 mt-8 w-48 h-12 rounded-2xl flex justify-start transition-colors duration-300">
                  Devamını oku
                </button>
              </a>
            </div>
          </div>
          <div>
            <img
              src="../assets/newsimg2.png"
              alt="newsimage"
              className="w-[418px] h-[277px]"
            />
            <div className="mt-5">
              <h1 className="text-[#004607] text-start font-semibold font-poppins text-lg">
                Kağıt israfını azaltmak için size <br />
                önerilerimize göz atın.
              </h1>
              <h2 className="text-start mt-3">
                Kağıt kaybının azaltılmasının en etkili yollarından biri, <br />
                belgeleri dijital olarak korumaktır. Dosyalar, raporlar <br />
                ve belgeler dijital arşivlerde saklanabilir...
              </h2>
              <a href="/information/kagit">
                <button className="text-white bg-[#F49939] hover:bg-[#F6D107] px-11 py-3 mt-8 w-48 h-12 rounded-2xl flex justify-start transition-colors duration-300">
                  Devamını oku
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              src="../assets/newsimg3.png"
              alt="newsimage"
              className="w-[418px] h-[277px]"
            />
            <div className="mt-5">
              <h1 className="text-[#004607] text-start font-semibold font-poppins text-lg">
                Su israfını azaltmak için size <br />
                önerilerimize göz atın.
              </h1>
              <h2 className="text-start mt-3">
                Ellerimizi yıkarken, diş fırçalarken ve tıraş olurken suya{" "}
                <br />
                ihtiyacımız olmadığı anlarda musluğu kapatarak <br />
                su kullanımını günde 23 litre azaltabilirsiniz...
              </h2>
              <a href="/information/su">
                <button className="text-white bg-[#F49939] hover:bg-[#F6D107] px-11 py-3 mt-8 w-48 h-12 rounded-2xl flex justify-start transition-colors duration-300">
                  Devamını oku
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center pt-24"
        style={{
          backgroundImage: `url('../assets/footerimage.png')`,
        }}
      >
        <div className="absolute top-0 left-0 items-center p-4 flex">
          <div className="flex flex-col mr-4">
            <div className="flex items-center">
              <img
                src="../assets/greensteplogo.png"
                alt="greensteplogo"
                className="mr-2 ml-20 mt-16 w-36 h-32"
              />
              <h1 className="font-poppins text-white text-4xl mt-16">
                Green
                <span className="font-poppins font-semibold text-[#9AC8A2] text-4xl">
                  Step
                </span>
              </h1>
            </div>
            <div className="mt-6 ml-28">
              <h2 className="font-poppins text-white text-start">
                GreenStep ile geri dönüşüm bilincini <br /> yayarak çevresel
                sürdürülebilirliğe <br /> katkıda bulunalım; doğayı koruma{" "}
                <br /> sorumluluğumuzu üstlenerek gelecek <br /> nesillere
                yaşanabilir bir dünya <br />
                bırakalım.
              </h2>
            </div>
          </div>

          <div className="flex flex-col text-start ml-36 space-y-6 mt-10">
            <h1 className="font-poppins font-semibold text-white text-2xl">
              HIZLI LİNKLER
            </h1>
            <a
              href="/login"
              className="text-[#FFFFFF]  font-poppins hover:text-green-700 text-md"
            >
              Giriş Yap
            </a>

            <a
              href="/register"
              className="text-[#FFFFFF]  font-poppins hover:text-green-700 text-md"
            >
              Kayıt Ol
            </a>
            <a
              href="/information"
              className="text-[#FFFFFF]  font-poppins hover:text-green-700 text-md "
            >
              Bilgilendirme
            </a>
          </div>
        </div>
        <div className="flex flex-col mr-56 mt-10 space-y-8 justify-end items-end">
          <img
            src="../assets/appstore.png"
            alt="appstorelogo"
            className="w-60 h-20"
          />
          <img
            src="../assets/googleplay.png"
            alt="appstorelogo"
            className="w-60 h-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
