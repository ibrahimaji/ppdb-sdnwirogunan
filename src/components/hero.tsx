import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-3/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/ppdb.jpg"
          width={720}
          height={600}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Selamat Datang di Website PPDB UPT SDN Wirogunan Kota Pasuruan
          </h1>
          <p className="mb-8 leading-relaxed">
            UPT SDN Wirogunan Kota Pasuruan adalah tempat di mana prestasi di
            bidang akademik dan olahraga menjadi bagian tak terpisahkan dari
            perjalanan pendidikan kami. Kami bangga memiliki tim guru dan siswa
            yang gemilang, siap menginspirasi dan mengeksplorasi potensi
            maksimal setiap individu
          </p>
        </div>
      </div>
    </section>
  );
};
