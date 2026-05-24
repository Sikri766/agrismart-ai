import { Upload, ScanSearch, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Image",
    desc: "Pengguna mengunggah gambar daun padi.",
  },
  {
    icon: ScanSearch,
    title: "AI Scanning",
    desc: "Sistem membaca pola visual pada daun.",
  },
  {
    icon: ClipboardCheck,
    title: "Get Recommendation",
    desc: "Website menampilkan hasil dan saran penanganan.",
  },
];

export default function HowItWorks() {
  return (
    <section id="works" className="bg-slate-900 px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-semibold text-emerald-300">How It Works</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-black md:text-5xl">
          Simple process, powerful farming insight.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group rounded-[2rem] border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-2 hover:border-emerald-300/40"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-400 text-slate-950">
                    <Icon />
                  </div>
                  <span className="text-5xl font-black text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}