import { useState } from "react";
import "./App.css";
import Img1 from "./img/img1.webp";
import Img2 from "./img/img2.webp"; // Import the second product image
import Img3 from "./img/img3.webp"; // Import the third product image
import { FaGithub } from "react-icons/fa";

function App() {
  const [count0, setCount0] = useState(212800000000);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const productPrice1 = (189.9).toFixed(2);
  const productPrice2 = (99.9).toFixed(2);
  const productPrice3 = (149.9).toFixed(2);
  const productPrice4 = (189.9).toFixed(2);
  const productPrice5 = (99.9).toFixed(2);
  const productPrice6 = (149.9).toFixed(2);
  const productPrice7 = (189.9).toFixed(2);
  const productPrice8 = (99.9).toFixed(2);

  const totalPrice = (
    count1 * productPrice1 +
    count2 * productPrice2 +
    count3 * productPrice3 +
    count4 * productPrice4 +
    count5 * productPrice5 +
    count6 * productPrice6 +
    count7 * productPrice7 +
    count8 * productPrice8
  ).toFixed(2);

  const totalDamage = (count0 - totalPrice)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

const totalProducts = (
  count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8
);

  return (
    <>
      <div className="card items-center" id="start">
        <h1 className="text-4xl">Elon Musk’s net worth is:</h1>
        <h1 className="text-green-500 font-semibold p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          ${formatNumberWithCommas(totalDamage)}
        </h1>
        <p className="p-2">
          And your job is to bankrupt him by adding as many products as you can
          into his shopping cart.
        </p>
        <p></p>
        <h1 className="text-2xl pt-10">Your total damage for his wallet is:</h1>
        <h1 className="text-red-500 font-semibold"> ${totalPrice}</h1>
        <p className="">with total of {totalProducts} products</p>
      </div>

      <div className="card xl:flex gap-x-6 xl:gap-x-10 text-center p-4 ">
        {/* 1st Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 1</h1>
          <img src={Img2} alt="Moderni hiiligrilli" className="w-1/2 pb-8" />
          <div className="card2"><span className="font-semibold text-xl"></span>
            Price:{" "}
            <span className="font-semibold text-xl">${productPrice1}</span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount1((count1) => Math.max(count1 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count1}</span>
            <button
              className="rounded-md"
              onClick={() => setCount1((count1) => count1 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count1 * productPrice1).toFixed(2)} USD
            </span>
            <p className="price">( {count1} items )</p>
          </p>
        </div>

        {/* Second Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 2</h1>
          <img src={Img2} alt="Moderni hiiligrilli" className="w-1/2 pb-8" />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice2}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount2((count2) => Math.max(count2 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count2}</span>
            <button
              className="rounded-md"
              onClick={() => setCount2((count2) => count2 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count2 * productPrice2).toFixed(2)} USD
            </span>
            <p className="price">( {count2} items )</p>
          </p>
        </div>

        {/* Third Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 3</h1>
          <img
            src={Img3}
            alt="Kevyt kannettava grillipöytä"
            className="w-1/2 pb-8"
          />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice3}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount3((count3) => Math.max(count3 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2 ">{count3}</span>
            <button
              className="rounded-md"
              onClick={() => setCount3((count3) => count3 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count3 * productPrice3).toFixed(2)} USD
            </span>
            <p className="price">( {count3} items )</p>
          </p>
        </div>

        {/* 4th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 4</h1>
          <img
            src={Img3}
            alt="Kevyt kannettava grillipöytä"
            className="w-1/2 pb-8"
          />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice4}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount4((count4) => Math.max(count4 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count4}</span>
            <button
              className="rounded-md"
              onClick={() => setCount4((count4) => count4 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count4 * productPrice4).toFixed(2)} USD
            </span>
            <p className="price">( {count4} items )</p>
          </p>
        </div>
      </div>

      <div className="card xl:flex gap-x-6 xl:gap-x-10 text-center p-4 ">
        {/* 5th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 5</h1>
          <img src={Img2} alt="Moderni hiiligrilli" className="w-1/2 pb-8" />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice5}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount5((count5) => Math.max(count5 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count5}</span>
            <button
              className="rounded-md"
              onClick={() => setCount5((count5) => count5 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count5 * productPrice5).toFixed(2)} USD
            </span>
            <p className="price">( {count5} items )</p>
          </p>
        </div>

        {/* 6th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 6</h1>
          <img src={Img2} alt="Moderni hiiligrilli" className="w-1/2 pb-8" />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice6}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount6((count6) => Math.max(count6 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2 ">{count6}</span>
            <button
              className="rounded-md"
              onClick={() => setCount6((count6) => count6 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count6 * productPrice6).toFixed(2)} USD
            </span>
            <p className="price">( {count6} items )</p>
          </p>
        </div>

        {/* 7th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 7</h1>
          <img
            src={Img3}
            alt="Kevyt kannettava grillipöytä"
            className="w-1/2 pb-8"
          />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice7}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount7((count7) => Math.max(count7 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count7}</span>
            <button
              className="rounded-md"
              onClick={() => setCount7((count7) => count7 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count7 * productPrice7).toFixed(2)} USD
            </span>
            <p className="price">( {count7} items )</p>
          </p>
        </div>

        {/* 8th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="p-8 text-4xl xl:text-2xl">Tuote 8</h1>
          <img
            src={Img3}
            alt="Kevyt kannettava grillipöytä"
            className="w-1/2 pb-8"
          />
          <div className="card2">
            Hinta:{" "}
            <span className="font-semibold text-xl">{productPrice8}</span> €
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount8((count8) => Math.max(count8 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count8}</span>
            <button
              className="rounded-md"
              onClick={() => setCount8((count8) => count8 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count8 * productPrice8).toFixed(2)} USD
            </span>
            <p className="price">( {count8} items )</p>
          </p>
        </div>
      </div>

      <p className="pt-12 text-lg text-gray-400">
      This project is just for fun and practice. It's a playful way to learn useState in React, style things up with Tailwind CSS, and set it all up with Vite.

The products, prices, and everything else you see here are totally made up. They're not real and are just for giggles.

No actual buying or selling happens here, and no real money's involved. It's all just for learning and experimenting.

Enjoy poking around, and remember — it's all in good fun!
      </p>

      <footer className="mt-10 text-white flex items-center justify-center">
        <p>Made by: 0xjulius</p>
        <a
          href="https://github.com/0xjulius"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FaGithub className="text-white w-6 h-6" />
        </a>
      </footer>
    </>
  );
}

export default App;
