import React from "react";
import { IconType } from "react-icons";
import { FiCreditCard, FiFlag, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        <Card
          title="Guru Berpengalaman dan Berdedikasi"
          subtitle="Tim pengajar kami terdiri dari para profesional yang
                berpengalaman dan berdedikasi, siap memberikan bimbingan serta
                dukungan yang dibutuhkan setiap siswa untuk meraih potensi
                terbaiknya."
          href="#"
          Icon={FiUser}
        />
        <Card
          title="Prestasi Akademik Unggul"
          subtitle="UPT SDN Wirogunan telah mencatatkan prestasi akademik yang
                gemilang, menciptakan lingkungan belajar yang mendorong setiap
                siswa untuk meraih keunggulan dalam bidang akademik"
          href="#"
          Icon={FiFlag}
        />
        <Card
          title="Fasilitas Modern dan Mendukung"
          subtitle="UPT SDN Wirogunan dilengkapi dengan fasilitas modern yang
                mendukung pembelajaran efektif dan menyenangkan, menciptakan
                lingkungan belajar yang inspiratif dan nyaman bagi siswa."
          href="#"
          Icon={FiUsers}
        />
        <Card
          title="Kegiatan Ekstrakurikuler yang Beragam"
          subtitle="Kami menyediakan berbagai kegiatan ekstrakurikuler yang menarik
                dan bervariasi, memberikan siswa kesempatan untuk mengeksplorasi
                minat dan bakat mereka di luar ruang kelas"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
