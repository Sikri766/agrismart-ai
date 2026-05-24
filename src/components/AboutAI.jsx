import { BrainCircuit, Leaf, Sparkles } from "lucide-react";

export default function AboutAI() {
  return (
    <section id="about" className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-emerald-300">About AI</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            AI technology for smarter rice farming.
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            AgriSmart AI dirancang sebagai platform edukatif yang membantu mengenali penyakit daun padi secara cepat melalui konsep computer vision.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 p-6">
            <BrainCircuit className="text-emerald-300" />
            <h3 className="mt-4 text-xl font-bold">Computer Vision</h3>
            <p className="mt-2 text-slate-400">
              Sistem mengenali pola visual pada daun untuk membantu proses identifikasi penyakit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
            <Leaf className="text-cyan-300" />
            <h3 className="mt-4 text-xl font-bold">Smart Agriculture</h3>
            <p className="mt-2 text-slate-400">
              Menggabungkan teknologi modern dengan kebutuhan pertanian masa depan.
            </p>
          </div>

          <div className="rounded-[2rem] border border-lime-300/20 bg-lime-300/10 p-6">
            <Sparkles className="text-lime-300" />
            <h3 className="mt-4 text-xl font-bold">Human Centered Design</h3>
            <p className="mt-2 text-slate-400">
              Tampilan dibuat sederhana agar mudah digunakan oleh pelajar, petani, dan masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}