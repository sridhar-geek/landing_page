import Image from "next/image";

// Imports from another files
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";

const Home = () => {
  // offers data
  const offers = [
    {
      id: 1,
      icon: "/Offers/offer1.png",
      method: "BOOK WITH",
      plan: "ONLY 20%",
    },
    {
      id: 2,
      icon: "/Offers/offer2.png",
      method: "PAYMENT PLAN",
      plan: "EASY 70/30",
    },
    {
      id: 3,
      icon: "/Offers/offer3.png",
      method: "HANDOVER ON",
      plan: "Q2 2027",
    },
    {
      id: 4,
      icon: "/Offers/offer4.png",
      method: "AREA STARTS FROM",
      plan: "700 SQMT",
    },
  ];

  return (
    <main>
      <Header />
      {/* Offer Section*/}
      <aside className="margin mt-10 mb-14 overflow-x-auto flex justify-between items-center gap-16">
        {/* Single Offer */}
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center justify-center text-primary-dark"
          >
            <Image src={offer.icon} alt="offerImage" height={50} width={50} />
            <h6 className="font-medium text-sm text-nowrap">{offer.method}</h6>
            <h4 className="font-bold text-xl">{offer.plan}</h4>
          </div>
        ))}
      </aside>
      <FeaturesSection />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Home;
