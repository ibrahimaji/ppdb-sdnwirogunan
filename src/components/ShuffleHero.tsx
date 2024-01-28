import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div>
          <motion.span
            className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Dengan ilmu, kita menuju kemuliaan
          </motion.span>
          <motion.h3
            className="text-4xl md:text-6xl font-semibold"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Selamat Datang di Website PPDB
          </motion.h3>
          <motion.p
            className="text-base md:text-lg text-slate-700 my-4 md:my-6"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            UPT SDN Wirogunan Kota Pasuruan
          </motion.p>
          <a href="#daftar">
            <motion.button
              className="rounded-2xl border-2 border-dashed border-black bg-indigo-400 px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Daftar
            </motion.button>
          </a>
        </div>
      </motion.div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/1.jpg",
  },
  {
    id: 2,
    src: "/2.jpg",
  },
  {
    id: 3,
    src: "/3.jpg",
  },
  {
    id: 4,
    src: "/4.jpg",
  },
  {
    id: 5,
    src: "/5.jpg",
  },
  {
    id: 6,
    src: "/6.jpg",
  },
  {
    id: 7,
    src: "/7.jpg",
  },
  {
    id: 8,
    src: "/8.jpg",
  },
  {
    id: 9,
    src: "/9.jpg",
  },
  {
    id: 10,
    src: "/10.jpg",
  },
  {
    id: 11,
    src: "/11.jpg",
  },
  {
    id: 12,
    src: "/12.jpg",
  },
  {
    id: 13,
    src: "/13.jpg",
  },
  {
    id: 14,
    src: "/14.jpg",
  },
  {
    id: 15,
    src: "/15.jpg",
  },
  {
    id: 16,
    src: "/16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
