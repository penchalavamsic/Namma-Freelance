import Navbar from "../components/Navbar";
import ServicesCard from "../components/ServicesCard";
import Footer from "../components/Footer";

const serviceCardDetails = [
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1715471472/web_development_1_oyj0lp.png",
    title: "Kuchipudi Dancer",
    avgPrice: "₹12000-₹14000",
    linkTo: "",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1715495595/app_development_1_pb1ev3.png",
    title: "Veena Artist",
    avgPrice: "₹13000-₹16000",
    linkTo: "",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1715495595/gd_1_jfnzpa.png",
    title: "Hand Crafts",
    avgPrice: "₹13000-₹16000",
    linkTo: "",
  },
];

const Home = () => {
  return (
    <section className="bg-black min-h-screen home-bg">
      <Navbar />
      <div className="banner">
        <img
          src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715470732/Group_119_obq8pt.png"
          className="banner-text w-full xl:max-h-[500px]"
        />
      </div>
      <section className="px-20 py-10 home-bg">
        <div className="mb-8">
          <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
            Explore More Services
          </h2>
          <ul className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCardDetails.map((serviceDetails) => (
              <ServicesCard
                serviceDetails={serviceDetails}
                key={serviceDetails.title}
              />
            ))}
          </ul>
        </div>
        {/* <div className="mb-8">
          <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
            Explore More Services
          </h2>
          <ul className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
          </ul>
        </div> */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715472211/mobile-phone-as-platform-planet-lines-satellites-orbits-around-globe-spaceships-cellular-communication-174431570-removebg-preview_1_ilyb5q.png"
              className="lg:max-w-[600px] mx-auto"
            />
          </div>
          <div className="flex-1 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3">
              Providing services round the Karnataka
            </h2>
            <p className="lg:w-[80%]">
              Doesn&apos;t matter at which part of karnataka you are at let us
              know what you need and get best professionals for you style.
            </p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715472591/rangoli_2_waeoki.png"
          className="block mx-auto my-4 mt-8"
        />
      </section>
      <Footer />
    </section>
  );
};

export default Home;
