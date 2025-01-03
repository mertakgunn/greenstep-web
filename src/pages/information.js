import React from "react";
import Header from "./header";
import Footer from "./footer";
import InformationComp from "./informationComp";

const Information = () => {
  const informationData = [
    {
      title: "Kağıt israfını azaltmak için size önerilerimize göz atın.",
      description:
        "•	Kağıt kaybının azaltılmasının en etkili yollarından biri, belgeleri dijital olarak korumaktır. Dosyalar, raporlar ve belgeler dijital arşivlerde saklanabilir.  Elektronik imzanın kullanılması, kopyaların basılmasına gerek kalmadan... ",
      imageSource: "../assets/informationimage.png",
      backgroundColor: "#F0F0F0",
      padding: "2rem",
      titleClassName: "text-gray-800 font-bold",
      button: {
        label: "Daha Fazla Bilgi",
        link: "/information/kagit",
      },
    },
    {
      title: "Plastik kullanımını azaltmak için size önerilerimize göz atın.",
      description:
        "•	Tek kullanımlık plastik şişeler, poşetler, bardaklar, çatal bıçakları ve pipetler yerine, tekrar kullanılabilir alternatifler tercih edin. Su şişenizi, kahve kupanızı, yemek kaplarınızı ve tekrar...",
      imageSource: "../assets/informationimage2.png",
      backgroundColor: "#E0E0E0",
      padding: "1.5rem",
      titleClassName: "text-gray-700 font-medium",
      button: {
        label: "Daha Fazla Bilgi",
        link: "/information/plastik",
      },
    },
    {
      title: "Su israfını azaltmak için size önerilerimize göz atın.",
      description:
        "•	Ellerimizi yıkarken, diş fırçalarken ve tıraş olurken suya ihtiyacımız olmadığı anlarda musluğu kapatarak su kullanımını günde 23 litre azaltabilirsiniz....",
      imageSource: "../assets/informationimage3.png",
      backgroundColor: "#D0D0D0",
      padding: "2.5rem",
      titleClassName: "text-gray-600 font-normal",
      button: {
        label: "Daha Fazla Bilgi",
        link: "/information/su",
      },
    },
  ];

  return (
    <div className="information-container bg-gray-100 ">
      <div className="">
        <Header />
        {informationData.map((info, index) => (
          <InformationComp
            key={index}
            title={info.title}
            description={info.description}
            imageSource={info.imageSource}
            backgroundColor={info.backgroundColor}
            padding={info.padding}
            titleClassName={info.titleClassName}
            button={info.button}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Information;
