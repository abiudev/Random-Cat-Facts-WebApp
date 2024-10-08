# Cat Facts Web App 😻

A simple React web application that fetches cat facts from a third-party API and displays them in a responsive slider. This app is powered by [CatFact Ninja API](https://catfact.ninja) and uses Axios for making API requests.

## Features

- Fetches random cat facts from the [CatFact Ninja API](https://catfact.ninja).
- Displays cat facts in a React slider component.
- Fully responsive design.
- Supports seamless navigation between facts.

## Demo

![Cat Facts Demo]😻

## Technologies Used

- React
- Axios (for API requests)
- React Slider Component (such as Swiper, Slick, or custom-built slider)
- Tailwind CSS (optional for styling)
- JavaScript (ES6)

## Installation

1. Clone the repository:

```bash
git clone [https://github.com/your-username/cat-facts-app.git](https://github.com/abiudev/Random-Cat-Facts-WebApp)
cd cat-facts-app

```
##How It Works
Fetching Cat Facts: The app uses Axios to fetch random cat facts from the CatFact Ninja API. This happens in the useEffect hook when the component mounts.

Displaying Facts in a Slider: The fetched facts are stored in the component's state and passed to a slider component. Each slide displays a cat fact, allowing users to browse through them.

##API
The app fetches data from the following endpoint:

##GET /fact: Returns a random cat fact.
For more information, visit the CatFact Ninja API documentation.

##Example Code
##Fetching Cat Facts with Axios
``` Javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CatFactsSlider() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios.get("https://catfact.ninja/facts")
      .then(response => setFacts(response.data.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="slider">
      {facts.map((fact, index) => (
        <div key={index} className="slide">
          {fact.fact}
        </div>
      ))}
    </div>
  );
}
```
