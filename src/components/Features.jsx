import { motion } from "framer-motion";
import { BarChart3, BookOpen, ScanLine } from "lucide-react";

const features = [
  { icon: ScanLine, title: "AI Leaf Scanner", desc: "Simulasi deteksi penyakit daun padi melalui upload gambar." },
  { icon: BookOpen, title: "Disease Library", desc: "Informasi penyakit, gejala, dan saran penanganan." },
  { icon: BarChart3, title: "Smart Result", desc: "Hasil deteksi dengan confidence score dan rekomendasi." },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold text-emerald-300">Core Features</p>
        <h2 className="mt-3 text-3xl font-black md:text-5xl">Built for innovation and social impact.</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}