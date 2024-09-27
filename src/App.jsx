import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
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

  const productPrices = [
    49995000, 2800000, 4000000, 1500000, 60500000,
    20000000, 5511500, 8000000, 440000000
  ];

  const totalPrice = (
    count1 * productPrices[0] +
    count2 * productPrices[1] +
    count3 * productPrices[2] +
    count4 * productPrices[3] +
    count5 * productPrices[4] +
    count6 * productPrices[5] +
    count7 * productPrices[6] +
    count8 * productPrices[7] +
    count9 * productPrices[8]
  ).toFixed(2);

  const totalDamage = count0 - parseFloat(totalPrice);
  
  const totalPriceFormatted = totalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const totalProducts =
    count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9;

    
  return (
    <>
      <div className="sticky-div top-0 z-10 bg-[#232323] flex justify-center items-center">
        <div className="card flex flex-col items-center p-4 text-center" id="start">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            Elon Musk’s net worth is:
          </h1>
          <h1 className="text-green-500 font-semibold p-4 text-3xl md:text-6xl lg:text-7xl">
            <AnimatedNumbers
              includeComma
              animateToNumber={totalDamage}
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
              ]}
            />
          </h1>
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <p className="text-center px-2 sm:px-4 md:px-6 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl">
            And your job is to bankrupt him by adding as many products as you can into his shopping cart.
          </p>
          </div>
        </div>
      </div>

      <div className="card items-center p-4 justify-items-center">
        <h1 className="text-2xl pt-10">Your total damage for his wallet is:</h1>
        <h1 className="text-red-500 font-semibold text-3xl pt-4">
          ${totalPriceFormatted}
        </h1>
        <p className="pt-4">with total of {totalProducts} products</p>
      </div>

      <div className="card grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-10 text-center">
        {/* 1st Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Gulfstream G650ER Jet Aircraft</h1>
          <img src={Img1} alt="Gulfstream G650ER" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">The most fastest ultra-long-range business jet in the world.</p>
          <div className="card2">
            <span className="">Price: </span>
            <span className="font-semibold text-xl">${productPrices[0]}</span>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount1((count1) => Math.max(count1 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count1}</span>
            <button className="rounded-md" onClick={() => setCount1((count1) => count1 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count1 * productPrices[0]).toFixed(2)} USD</span>
            <p className="price">({count1} items)</p>
          </p>
        </div>

        {/* 2nd Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Patek Philippe Grandmaster Chime</h1>
          <img src={Img2} alt="Patek Philippe Grandmaster Chime" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">The most complicated Patek Philippe wristwatch ever-made.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[1]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount2((count2) => Math.max(count2 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count2}</span>
            <button className="rounded-md" onClick={() => setCount2((count2) => count2 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count2 * productPrices[1]).toFixed(2)} USD</span>
            <p className="price">({count2} items)</p>
          </p>
        </div>

        {/* 3rd Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Lamborghini Veneno Roadster 2013</h1>
          <img src={Img3} alt="Lamborghini Veneno Roadster" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">Limited edition supercar made by Lamborghini for its 50th anniversary in 2013.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[2]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount3((count3) => Math.max(count3 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count3}</span>
            <button className="rounded-md" onClick={() => setCount3((count3) => count3 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count3 * productPrices[2]).toFixed(2)} USD</span>
            <p className="price">({count3} items)</p>
          </p>
        </div>

        {/* 4th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Karambit Case Hardened Seed / Pattern: 387</h1>
          <img src={Img4} alt="Karambit Blue Gem Seed / Pattern: 387" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">The #1 ‘387’ pattern 'Blue Gem' - Most valuable and rare skin in CS2.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[3]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount4((count4) => Math.max(count4 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count4}</span>
            <button className="rounded-md" onClick={() => setCount4((count4) => count4 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count4 * productPrices[3]).toFixed(2)} USD</span>
            <p className="price">({count4} items)</p>
          </p>
        </div>

        {/* 5th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Cruciani 12-Cross Bracelet</h1>
          <img src={Img5} alt="Cruciani 12-Cross Bracelet" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">A beautiful bracelet gifted by a friend.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[4]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount5((count5) => Math.max(count5 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count5}</span>
            <button className="rounded-md" onClick={() => setCount5((count5) => count5 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count5 * productPrices[4]).toFixed(2)} USD</span>
            <p className="price">({count5} items)</p>
          </p>
        </div>

        {/* 6th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Baldessarini Deluxe 1.0 L</h1>
          <img src={Img6} alt="Baldessarini Deluxe" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">A luxurious and exclusive fragrance with a unique scent.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[5]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount6((count6) => Math.max(count6 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count6}</span>
            <button className="rounded-md" onClick={() => setCount6((count6) => count6 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count6 * productPrices[5]).toFixed(2)} USD</span>
            <p className="price">({count6} items)</p>
          </p>
        </div>

        {/* 7th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Rolex Daytona Platinum</h1>
          <img src={Img7} alt="Rolex Daytona Platinum" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">An exclusive platinum chronograph watch from Rolex.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[6]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount7((count7) => Math.max(count7 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count7}</span>
            <button className="rounded-md" onClick={() => setCount7((count7) => count7 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count7 * productPrices[6]).toFixed(2)} USD</span>
            <p className="price">({count7} items)</p>
          </p>
        </div>

        {/* 8th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Bali Mandara Resort</h1>
          <img src={Img8} alt="Bali Mandara Resort" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">A luxurious resort stay in Bali.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[7]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount8((count8) => Math.max(count8 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count8}</span>
            <button className="rounded-md" onClick={() => setCount8((count8) => count8 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count8 * productPrices[7]).toFixed(2)} USD</span>
            <p className="price">({count8} items)</p>
          </p>
        </div>

        {/* 9th Product */}
        <div className="product flex flex-col items-center mt-10">
          <h1 className="product-title m-4 text-xl">Superyacht A</h1>
          <img src={Img9} alt="Superyacht A" className="w-2/3 md:w-full m-2" />
          <p className="pb-4 product-text">One of the most luxurious superyachts in the world.</p>
          <div className="card2">Price: <span className="font-semibold text-xl">${productPrices[8]}</span></div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="rounded-md" onClick={() => setCount9((count9) => Math.max(count9 - 1, 0))}>-</button>
            <span className="text-xl pt-2">{count9}</span>
            <button className="rounded-md" onClick={() => setCount9((count9) => count9 + 1)}>+</button>
          </div>
          <p>
            total: <span className="font-semibold text-xl text-green-500">{(count9 * productPrices[8]).toFixed(2)} USD</span>
            <p className="price">({count9} items)</p>
          </p>
        </div>
      </div>

      <p className="pt-12 text-base text-gray-400 mx-40">
        This project is just for fun and practice. It's a playful way to learn useState in React, style things up with Tailwind CSS, and set it all up with Vite. The products, prices, and everything else you see here are totally made up. They're not real and are just for giggles. No actual buying or selling happens here, and no real money's involved. It's all just for learning and experimenting. Enjoy poking around, and remember — it's all in good fun!
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
