import { useState } from 'react';
import './App.css';
import Img1 from "./img/img1.webp";
import { FaGithub } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0);
  const productPrice = 189.90;

  return (
    <>
      <div className="card flex flex-col items-center justify-center min-h-screen">
        <h1 className='p-8 text-4xl'>Anton Oliver EX-3 -kaasugrilli, musta</h1>
        <img src={Img1} alt="Anton Oliver EX-3 -kaasugrilli, musta" className="w-1/2 pb-8"/>
        <div className="card2">Hinta: <span className='font-semibold text-xl'>{productPrice}</span> €</div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="rounded-md" onClick={() => setCount((count) => Math.max(count - 1, 0))}>-</button>
          <span className="text-xl pt-2">{count}</span>
          <button className="rounded-md" onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        
        <p className="price pt-10 pb-10">
          {count} tuotetta, yhteensä: Hinta <span className="font-semibold text-xl">{count * productPrice}</span> €
        </p>

        {count > 0 && (
          <button className='button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'>
            Siirry kassalle ->
          </button>
        )}

        <p className="pt-6 text-lg text-gray-400">
          Tehokkaalla kolmen polttimen kaasugrillillä grillaat niin pihvit kuin kasviksetkin kypsiksi nopeasti ja vaivattomasti. Grillissä on varmatoiminen piezo-sytytys, valurautainen MGS-ritilä, lämmitysritilä, kaksinkertainen kansi lämpömittarilla sekä tilava säilytyskaappi grillitarvikkeita varten.
        </p>

        <footer className="mt-10 text-white flex items-center justify-center">
          <p>Made by: 0xjulius</p>
          <a href="https://github.com/0xjulius" target="_blank" rel="noopener noreferrer" className="ml-2">
            <FaGithub className="text-white w-6 h-6"/>
          </a>
        </footer>

      </div>
    </>
  );
}

export default App;
