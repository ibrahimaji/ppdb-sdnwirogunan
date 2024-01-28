import React from "react";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="block md:flex md:flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/ppdb.jpg"
                width={302}
                height={302}
              />
              <p className="leading-relaxed">Sekolah yang mantap</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                RUSNANI
              </h2>
              <p className="text-gray-500">Kepala Sekolah SDN Wirogunan</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/ppdb.jpg"
                height={300}
                width={300}
              />
              <p className="leading-relaxed">
                Aku menemukan jalan hidupku disini
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                RAJA
              </h2>
              <p className="text-gray-500">Siswa Kelas 6</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/ppdb.jpg"
                height={305}
                width={305}
              />
              <p className="leading-relaxed">SD yang Hebat</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                ROSYANA SULTHONA
              </h2>
              <p className="text-gray-500">Guru Kelas 6</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
