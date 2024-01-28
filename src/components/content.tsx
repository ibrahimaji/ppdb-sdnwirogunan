import {
  ClipboardPenLine,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Router,
  ShieldCheck,
} from "lucide-react";
import React from "react";

export const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Mengapa Memilih UPT SDN Wirogunan?
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            UPT SDN Wirogunan: Pilihan Terbaik untuk Masa Depan Pendidikan Anak
            Anda
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <LineChart />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Prestasi Akademik Unggul
              </h2>
              <p className="leading-relaxed text-base">
                UPT SDN Wirogunan telah mencatatkan prestasi akademik yang
                gemilang, menciptakan lingkungan belajar yang mendorong setiap
                siswa untuk meraih keunggulan dalam bidang akademik
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <ShieldCheck />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Fokus pada Pengembangan Karakter
              </h2>
              <p className="leading-relaxed text-base">
                Kami tidak hanya mengutamakan nilai akademis, tetapi juga
                memberikan perhatian khusus pada pengembangan karakter yang
                kuat, menciptakan generasi yang tangguh dan berintegritas.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Lightbulb />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Kurikulum Berbasis Inovasi
              </h2>
              <p className="leading-relaxed text-base">
                Dengan kurikulum yang inovatif dan relevan, kami menawarkan
                pendekatan pembelajaran yang memacu pemikiran kritis,
                kreativitas, dan kolaborasi di setiap ruang kelas.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <ClipboardPenLine />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Guru Berpengalaman dan Berdedikasi
              </h2>
              <p className="leading-relaxed text-base">
                Tim pengajar kami terdiri dari para profesional yang
                berpengalaman dan berdedikasi, siap memberikan bimbingan serta
                dukungan yang dibutuhkan setiap siswa untuk meraih potensi
                terbaiknya.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Router />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Fasilitas Modern dan Mendukung
              </h2>
              <p className="leading-relaxed text-base">
                UPT SDN Wirogunan dilengkapi dengan fasilitas modern yang
                mendukung pembelajaran efektif dan menyenangkan, menciptakan
                lingkungan belajar yang inspiratif dan nyaman bagi siswa.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <HeartHandshake />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Kegiatan Ekstrakurikuler yang Beragam
              </h2>
              <p className="leading-relaxed text-base">
                Kami menyediakan berbagai kegiatan ekstrakurikuler yang menarik
                dan bervariasi, memberikan siswa kesempatan untuk mengeksplorasi
                minat dan bakat mereka di luar ruang kelas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
