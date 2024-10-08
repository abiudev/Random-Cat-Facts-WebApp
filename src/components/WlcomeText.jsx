export default function WelcomeText() {
  return (
    <div className=" font-roboto mx-auto mt-3 mb-0 max-w-4xl p-6 border-2 border-yellow-400 rounded-lg bg-yellow-400 shadow-lg">
      <h1 className="text-3xl font-bold text-center">RANDOM CAT FACTS</h1>
      <h2 className="  text-xl px text-black font-mukta mt-4">
        Welcome to the Random Cat Facts Carousel! This webapp fetches data from
        a third Party API{" "}
        <span
          className="border-green-600 ml-1 mr-1 font-mukta text-sm rounded-lg text-green-500 bg-gray-900 shadow-lg"
          style={{ padding: "4px 6px" }}
        >
          https://catfact.ninja/fact
        </span>{" "}
        and displays them in a responsive slider. and uses Axios for making API
        requests. Discover intriguing and fun facts about our feline friends as
        you scroll through our delightful collection. Each card presents a
        unique fact, perfect for cat lovers and trivia enthusiasts alike.
      </h2>
    </div>
  );
}
