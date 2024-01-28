import React from "react";
import Iframe from "react-iframe";
import WhatsAppButton from "./whatsapp";

export const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto md:flex block sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 md:p-10 p-28 flex items-end justify-start relative">
          <Iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            scrolling="no"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.1297992975105!2d112.89520707505099!3d-7.669191892347511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7cf3feb691cf1%3A0xdc8e88c380d97622!2sSDN%20WIROGUNAN!5e0!3m2!1sen!2sid!4v1706388833023!5m2!1sen!2sid"
          />
          <div className="w-3/2 bg-white relative md:flex md:flex-wrap hidden py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ALAMAT
              </h2>
              <p className="mt-1">
                Jl. Sastrosurotuko No. 107 Kelurahan Wirogunan, Kecamatan
                Purworejo, Kota Pasuruan
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-bold title-font ">
            Segera Daftarkan Putra/i Anda!
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">Persyaratan :</p>
          <div className="relative mb-4">
            <ul>
              <li>1. Mengisi formulir pendaftaran</li>
              <li>2. Fotokopi akta kelahiran</li>
              <li>3. Fotokopi Kartu Keluarga</li>
              <li>4. Pas Foto 3x4 (4 lembar)</li>
              <li>5. Usia minimal 6 (enam) tahun pada 1 Juli 2024</li>
            </ul>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            DAFTAR!
          </button>
          <div className="relative mb-4 py-5">
            <strong>Ada pertanyaan?</strong> Kirim pesan WhatsApp pada kontak
            berikut
            <div className="flex items-center justify-around flex-wrap md:flex-nowrap px-5 py-5">
              {/*             <WhatsAppButton
                phoneNumber="+6281334140664"
                contactName="Bu Fitri"
              />
              <WhatsAppButton
                phoneNumber="+6281335368038"
                contactName="Bu Ratna"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
