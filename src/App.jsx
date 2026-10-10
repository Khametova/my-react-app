import { useState } from "react";
import Slider from "./components/Slider";
const slides = [
  {
    title: "Green parrot",
    description:
      "The green parrot serves as the symbol of Norfolk Island National Park and stands as a conservation success story.Thanks to ongoing work to control threats and support breeding, this iconic bird is recovering from near extinction.Listen for their characteristic ’kek-kek-kek’ call. and keep your eyes out for this parrot’s bright green feathers, red crown-patch and blue-edged wings.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiXjAyI21sxxJ8Bfi3_0Opz8W0AU6j3s4IvvbDG-DHlXvmYoKbo1nssw&s=10",
  },
  {
    title: "Tagetes",
    description:
      " Depending on the species, Tagetes species grow well in almost any sort of soil. Most horticultural selections grow best in soil with good drainage, and some cultivars are known to have good tolerance to drought.",
    src: "https://www.imgonline.com.ua/examples/red-yellow-flower.jpg",
  },
];
function App(props) {
  return <Slider slides={slides} />;
}

export default App;
