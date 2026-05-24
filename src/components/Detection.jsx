import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Upload } from "lucide-react";
import { diseases } from "../data/diseases";

export default function Detection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedDisease = useMemo(() => {
    if (!result) return null;
    return diseases.find((item) => item.name === result.name);
  }, [result]);

  function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setResult(null);
  }

  function detectDisease() {
    if (!image) return;
    setLoading(true);

    setTimeout(() => {
      const random = diseases[Math.floor(Math.random() * diseases.length)];
      const confidence = Math.floor(Math.random() * 12) + 87;
      setResult({ name: random.name, confidence });
      setLoading(false);
    }, 1200);
  }

  return (
    <section id="detect" className="bg-slate-900 px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-semibold text-emerald-300">AI Detection Demo</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Upload rice leaf image</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Demo ini memakai simulasi hasil deteksi dan dapat dikembangkan ke YOLOv8.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
            <label className="grid min-h-80 cursor-pointer place-items-center rounded-[1.5rem] border border-dashed border-emerald-300/40 bg-white/[0.03] p-6 text-center">
              {image ? (
                <img src={image} alt="Uploaded rice leaf" className="max-h-80 rounded-3xl object-contain" />
              ) : (
                <div>
                  <Upload className="mx-auto mb-4 text-emerald-300" size={42} />
                  <h3 className="text-xl font-bold">Choose leaf image</h3>
                  <p className="mt-2 text-slate-400">PNG, JPG, atau JPEG</p>
                </div>
              )}

              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>

            <button
              onClick={detectDisease}
              disabled={!image || loading}
              className="mt-5 w-full rounded-full bg-emerald-400 px-6 py-4 font-bold text-slate-950 hover:bg-emerald-300 disabled:opacity-50"
            >
              {loading ? "Scanning image..." : "Detect Disease"}
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 text-slate-950">
                <ShieldCheck />
              </div>
              <div>
                <h3 className="text-2xl font-black">Detection Result</h3>
                <p className="text-slate-400">Diagnosis and recommendation</p>
              </div>
            </div>

            {!result && !loading && (
              <div className="grid min-h-72 place-items-center rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center text-slate-400">
                Upload gambar daun padi lalu tekan tombol deteksi.
              </div>
            )}

            {loading && (
              <div className="grid min-h-72 place-items-center rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 text-center">
                <div>
                  <div className="mx-auto mb-5 h-16 w-16 animate-spin rounded-full border-4 border-emerald-300 border-t-transparent" />
                  <p className="font-semibold text-emerald-200">AI is analyzing leaf pattern...</p>
                </div>
              </div>
            )}

            {result && selectedDisease && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Detected Class</p>
                <h4 className="mt-2 text-3xl font-black">{selectedDisease.name}</h4>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-emerald-400" style={{ width: `${result.confidence}%` }} />
                </div>

                <p className="mt-2 text-sm text-slate-300">Confidence: {result.confidence}%</p>
                <p className="mt-5 text-slate-300">{selectedDisease.desc}</p>

                <div className="mt-5 rounded-2xl bg-slate-950/70 p-4">
                  <p className="font-bold text-emerald-200">Recommended Action</p>
                  <p className="mt-2 text-slate-300">{selectedDisease.solution}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}