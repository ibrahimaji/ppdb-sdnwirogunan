import React from "react";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Ekstrakurikuler
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Membangun Keterampilan dan Karakter: Program Ekstrakurikuler
            Unggulan Kami
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/drumband.jpg"
                width={600}
                height={360}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  DRUMBAND
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Berirama, Bersama Berkolaborasi!
                </h1>
                <p className="leading-relaxed">
                  Anak dapat belajar berkolaborasi, mengasah keterampilan
                  motorik, membangun disiplin, mengungkapkan kreativitas, dan
                  membentuk persahabatan yang kuat
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/membatik.jpg"
                width={601}
                height={361}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  MEMBATIK
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Terinspirasi oleh Karya Seni!
                </h1>
                <p className="leading-relaxed">
                  Dengan membatik, anak dapat mengembangkan keterampilan
                  feinsmotorik, menghargai warisan budaya dan melatih kerja
                  keras serta kesabaran.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/mendongeng.jpg"
                width={603}
                height={363}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  MENDONGENG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Masuki Dunia Dongeng!
                </h1>
                <p className="leading-relaxed">
                  Mendongeng dapat menumbuhkan imajinasi anak, mengembangkan
                  keterampilan bicara, dan belajar nilai - nilai moral yang
                  positif.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/pencak.jpg"
                width={602}
                height={362}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  PENCAK SILAT
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Menjadi Pahlawan Sejati!
                </h1>
                <p className="leading-relaxed">
                  Anak dapat mengembangkan keterampilan bela diri, meningkatkan
                  kesehatan tubuh, serta memperkuat kedisiplinan dan etika
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/pramuka.jpg"
                width={605}
                height={365}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  PRAMUKA
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Menjadi Pahlawan Lingkungan!
                </h1>
                <p className="leading-relaxed">
                  Anak akan memasuki dunia petualangan yang luar biasa dalam
                  melatih kemandirian dan keterampilan serta kepedulian pada
                  lingkungan
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/tari.jpg"
                width={606}
                height={366}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  MENARI
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Menggali Bakat dan Ekspresi!
                </h1>
                <p className="leading-relaxed">
                  Menari lebih dari sekedar gerakan, tetapi juga sebagai bentuk
                  ekspresi diri, mengasah keterampilan serta menghadirkan
                  kegembiraan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
