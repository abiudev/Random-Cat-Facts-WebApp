import Header from "./components/Header.jsx";
import WelcomeText from "./components/WlcomeText.jsx";
import MainCarousel from "./components/Carousel.jsx";

export default function App() {
  return (
    <>
      <div className="bg-[url('/background.jpg')] bg-cover min-h-screen">
        <Header />
        <WelcomeText />
        <MainCarousel />
      </div>
    </>
  );
}
