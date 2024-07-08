import { useState } from "react";
import "./App.css";
import Img1 from "./img/img1.jpg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpg";
import Img4 from "./img/img4.jpg";
import Img5 from "./img/img5.jpg";
import Img6 from "./img/img6.jpg";
import Img7 from "./img/img7.jpg";
import Img8 from "./img/img8.jpg";
import Img9 from "./img/img9.jpg";

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
  const [count9, setCount9] = useState(0);
  const productPrice1 = (49995000).toFixed(2);
  const productPrice2 = (2800000).toFixed(2);
  const productPrice3 = (4000000).toFixed(2);
  const productPrice4 = (1500000).toFixed(2);
  const productPrice5 = (60500000).toFixed(2);
  const productPrice6 = (20000000).toFixed(2);
  const productPrice7 = (5511500).toFixed(2);
  const productPrice8 = (8000000).toFixed(2);
  const productPrice9 = (440000000).toFixed(2);

  const totalPrice = (
    count1 * productPrice1 +
    count2 * productPrice2 +
    count3 * productPrice3 +
    count4 * productPrice4 +
    count5 * productPrice5 +
    count6 * productPrice6 +
    count7 * productPrice7 +
    count8 * productPrice8 +
    count9 * productPrice9 
  ).toFixed(2);

  const totalDamage = (count0 - totalPrice)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  const totalPriceFormatted = totalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const totalProducts =
    count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9;

  return (
    <>
      <div className="sticky top-0 z-10 bg-[#232323]">
        <div className="card items-center p-4" id="start">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            Elon Musk’s net worth is:
          </h1>
          <h1 className="text-green-500 font-semibold p-4 text-3xl md:text-6xl lg:text-7xl">
            ${formatNumberWithCommas(totalDamage)}
          </h1>
          <p className="text-center mx-40">
            And your job is to bankrupt him by adding as many products as you
            can into his shopping cart.
          </p>
        </div>
      </div>
      <div className="card items-center p-4 justify-items-center">
        <h1 className="text-2xl pt-10">Your total damage for his wallet is:</h1>
        <h1 className="text-red-500 font-semibold text-3xl pt-4">
          {" "}
          ${totalPriceFormatted}
        </h1>
        <p className="pt-4">with total of {totalProducts} products</p>
      </div>

      <div className="card grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-10 text-center">
        {/* 1st Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">
            Gulfstream G650ER Jet Aircraft
          </h1>
          <img src={Img1} alt="Gulfstream G650ER" className="w-2/3 md:w-full m-2" />

          <p className="pb-4 product-text">
            The most fastest ultra-long-range business jet in the world.
          </p>
          <div className="card2">
            <span className="">Price: </span>
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
          <h1 className="product-title m-4 text-xl">
            Patek Philippe Grandmaster Chime
          </h1>
          <img
            src={Img2}
            alt="Patek Philippe Grandmaster Chime"
            className="w-2/3 md:w-full m-2"
          />
          <p className="pb-4 product-text">
            The most complicated Patek Philippe wristwatch ever-made.
          </p>
          <div className="card2">
            Price:{" "}
            <span className="font-semibold text-xl">${productPrice2}</span>
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
          <h1 className="product-title m-4 text-xl">
            Lamborghini Veneno Roadster 2013
          </h1>
          <img
            src={Img3}
            alt="Lamborghini Veneno Roadster"
            className="w-2/3 md:w-full m-2"
          />
          <p className="pb-4 product-text">
            Limited edition supercar made by Lamborghini for its 50th
            anniversary in 2013.
          </p>
          <div className="card2">
          <span className="">Price: </span>
            <span className="font-semibold text-xl">${productPrice3}</span>
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
          <h1 className="product-title m-4 text-xl">
            Karambit Case Hardened Seed / Pattern: 387
          </h1>
          <img
            src={Img4}
            alt="Karambit Blue Gem Seed / Pattern: 387"
            className="w-2/3 md:w-full m-2"
          />
          <p className="pb-4 product-text">
            The #1 ‘387’ pattern 'Blue Gem' - Most valuable and rare skin in
            CS2.{" "}
          </p>
          <div className="card2">
          <span className="">Price: </span>
            <span className="font-semibold text-xl">${productPrice4}</span>
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

        {/* 5th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">AZZAM Yacht</h1>
          <img src={Img5} alt="AZZAM" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">
          The longest Emir of Abu Dhabi superyacht in the world, with a length of 180 meters.
          </p>
          <div className="card2">
          <span className="">Price: </span>
            <span className="font-semibold text-xl">${productPrice5}</span>
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
          <h1 className="product-title m-4 text-xl">AgustaWestland AW101</h1>
          <img src={Img6} alt="AW101" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">
          Medium-lift helicopter designed for military and civil operations.
          </p>
          <div className="card2">
            Price:{" "}
            <span className="font-semibold text-xl">${productPrice6}</span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount6((count6) => Math.max(count6 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count6}</span>
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
          <h1 className="product-title m-4 text-xl">The Rockefeller Emerald</h1>
          <img src={Img7} alt="AZZAM" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">
          The most expensive 18.04-carat octagonal step-cut Colombian emerald.
          </p>
          <div className="card2">
           Price:{" "}
            <span className="font-semibold text-xl">${productPrice7}</span>
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
          <h1 className="product-title m-4 text-xl">Mercedes-Benz Maybach Exelero</h1>
          <img src={Img8} alt="MB" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">
One of the most expensive high-performance sports cars with top speed of 351 km/h.
          </p>
          <div className="card2">
            Price:{" "}
            <span className="font-semibold text-xl">${productPrice8}</span>
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

        {/* 9th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Odeon Tower Penthouse, Monaco</h1>
          <img src={Img9} alt="ODEON" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text-lg">
          The most expensive penthouses in the world with a health center, and its extreme luxury and services.
          </p>
          <div className="card2">
            Price:{" "}
            <span className="font-semibold text-xl">${productPrice9}</span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="rounded-md"
              onClick={() => setCount9((count9) => Math.max(count9 - 1, 0))}
            >
              -
            </button>
            <span className="text-xl pt-2">{count9}</span>
            <button
              className="rounded-md"
              onClick={() => setCount9((count9) => count9 + 1)}
            >
              +
            </button>
          </div>
          <p>
            total:{" "}
            <span className="font-semibold text-xl text-green-500">
              {(count9 * productPrice9).toFixed(2)} USD
            </span>
            <p className="price">( {count9} items )</p>
          </p>
        </div>
      </div>

      <p className="pt-12 text-base text-gray-400 mx-40">
        This project is just for fun and practice. It's a playful way to learn
        useState in React, style things up with Tailwind CSS, and set it all up
        with Vite. The products, prices, and everything else you see here are
        totally made up. They're not real and are just for giggles. No actual
        buying or selling happens here, and no real money's involved. It's all
        just for learning and experimenting. Enjoy poking around, and remember —
        it's all in good fun!
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
