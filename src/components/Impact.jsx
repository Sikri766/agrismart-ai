import { Users, Wheat, Zap } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 p-8">
          <Wheat size={52} className="text-emerald-300" />
          <h2 className="mt-6 text-3xl font-black md:text-5xl">
            Why farmers need AI?
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Penyakit daun padi dapat mengganggu hasil panen jika terlambat dikenali. Platform ini membantu memberikan edukasi awal secara cepat, visual, dan mudah dipahami.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <Zap className="text-emerald-300" />
            <h3 className="mt-4 text-xl font-bold">Fast Identification</h3>
            <p className="mt-2 text-slate-400">
              Membantu pengguna mengenali gejala penyakit lebih cepat.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <Users className="text-cyan-300" />
            <h3 className="mt-4 text-xl font-bold">Social Impact</h3>
            <p className="mt-2 text-slate-400">
              Bermanfaat untuk petani, pelajar, dan komunitas pertanian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}