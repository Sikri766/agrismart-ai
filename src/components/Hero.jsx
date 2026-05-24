import { motion } from "framer-motion";
import { Activity, ChevronRight, Cpu, Leaf, ScanLine, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-slate-950 px-5 pb-24 pt-32 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
            <Cpu size={16} /> Future Innovation for Smart Farming
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Intelligent Rice Disease Detection Platform
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-slate-300">
            Platform edukatif berbasis web untuk membantu pengguna mengenali penyakit daun padi melalui simulasi deteksi gambar dan katalog penyakit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#detect" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300">
              Start Detection <ChevronRight size={18} />
            </a>
            <a href="#features" className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold hover:bg-white/10">
              Explore Features
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4">
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">AI System Status</p>
                  <h3 className="text-xl font-bold">Leaf Health Scanner</h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">Online</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950 p-5">
                  <Activity className="text-emerald-300" />
                  <p className="mt-4 text-3xl font-black">94%</p>
                  <p className="text-sm text-slate-400">Confidence</p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-5">
                  <Sprout className="text-cyan-300" />
                  <p className="mt-4 text-3xl font-black">4</p>
                  <p className="text-sm text-slate-400">Disease Classes</p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                <div className="mb-3 flex items-center gap-2 text-emerald-200">
                  <ScanLine size={18} /> Scanning Preview
                </div>
                <div className="grid h-44 place-items-center rounded-2xl border border-dashed border-emerald-300/40 text-center text-sm text-slate-300">
                  <Leaf size={48} className="text-emerald-300" />
                  Upload rice leaf image
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}