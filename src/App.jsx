import Header from "./components/Header.jsx";
import WelcomeText from "./components/WelcomeText.jsx"; // Fix typo in import
import MainCarousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.jpg')] bg-cover">
      <Header />
      <main className="flex-grow">
        <WelcomeText />
        <MainCarousel />
      </main>
      <Footer />
    </div>
  );
}
