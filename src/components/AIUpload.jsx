import { useState } from "react";
import axios from "axios";
import {
  Upload,
  ScanLine,
  ShieldCheck,
  Volume2,
  Sparkles,
  Bot,
} from "lucide-react";

const diseaseInfo = {
  narrow_brown_spot: {
    name: "Narrow Brown Spot",
    desc: "Penyakit bercak coklat sempit pada daun padi yang biasanya muncul sebagai garis kecil berwarna coklat.",
    solution:
      "Gunakan fungisida sesuai dosis, jaga kelembapan lahan, dan gunakan varietas tahan penyakit.",
  },
  brown_spot: {
    name: "Brown Spot",
    desc: "Penyakit bercak coklat yang menyebabkan penurunan kualitas daun dan pertumbuhan tanaman padi.",
    solution:
      "Perbaiki nutrisi tanah, gunakan benih sehat, dan lakukan pengendalian jamur secara tepat.",
  },
  bacterial_leaf_blight: {
    name: "Bacterial Leaf Blight",
    desc: "Penyakit hawar daun bakteri yang menyebabkan daun menguning dan mengering.",
    solution:
      "Gunakan varietas tahan bakteri, jaga sanitasi lahan, dan hindari nitrogen berlebihan.",
  },
  leaf_blast: {
    name: "Leaf Blast",
    desc: "Penyakit blas daun yang menyebabkan bercak dan dapat menyebar cepat.",
    solution:
      "Gunakan benih sehat, atur jarak tanam, dan gunakan fungisida sesuai rekomendasi.",
  },
  leaf_scald: {
    name: "Leaf Scald",
    desc: "Penyakit daun padi yang menyebabkan bercak memanjang seperti terbakar.",
    solution:
      "Kurangi kelembapan berlebih, gunakan varietas tahan, dan lakukan pemantauan rutin.",
  },
  healthy: {
    name: "Healthy Leaf",
    desc: "Daun padi terlihat sehat tanpa gejala penyakit utama.",
    solution:
      "Pertahankan irigasi, nutrisi tanaman, dan lakukan pemantauan rutin.",
  },
};

export default function AIUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const API_KEY = "Tx6K9x7uqAGcdJFSA87I";
  const MODEL_ID = "agrismart-ai/1";

  function playSound() {
    const audio = new Audio("/scan.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setProgress(0);
  }

  function runProgress() {
    setProgress(0);
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 12) + 5;

      if (value >= 95) {
        value = 95;
        clearInterval(interval);
      }

      setProgress(value);
    }, 250);

    return interval;
  }

  async function predictDisease() {
    if (!image) {
      alert("Upload gambar daun padi terlebih dahulu.");
      return;
    }

    setLoading(true);
    setResult(null);
    playSound();

    const progressInterval = runProgress();

    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await axios({
        method: "POST",
        url: `https://classify.roboflow.com/${MODEL_ID}?api_key=${API_KEY}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      clearInterval(progressInterval);
      setProgress(100);
      setResult(response.data);
      playSound();
    } catch (error) {
      clearInterval(progressInterval);
      console.error(error);
      alert("Deteksi gagal. Periksa API Key atau koneksi internet.");
    }

    setLoading(false);
  }

  const detectedClass = result?.top;

  const confidence = result?.confidence
    ? Math.round(result.confidence * 100)
    : 0;

  const info = diseaseInfo[detectedClass] || {
    name: detectedClass || "-",
    desc: "Informasi penyakit belum tersedia.",
    solution: "Lakukan pemeriksaan lanjutan pada tanaman.",
  };

  return (
    <section
      id="detect"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white"
    >
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-semibold text-emerald-300">
            Real AI Detection
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-6xl">
            Hologram AI Rice Scanner
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Upload gambar daun padi dan sistem AI akan menganalisis penyakit secara realtime menggunakan model Roboflow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-emerald-300/20 bg-white/[0.05] p-6 shadow-2xl shadow-emerald-400/10 backdrop-blur-xl">
            <label className="relative grid min-h-96 cursor-pointer place-items-center overflow-hidden rounded-[1.5rem] border border-dashed border-emerald-300/40 bg-slate-950 p-6 text-center transition hover:bg-slate-900">
              {loading && (
                <>
                  <div className="absolute inset-x-8 top-10 h-1 animate-pulse bg-emerald-300 shadow-[0_0_25px_#34d399]" />
                  <div className="absolute inset-8 rounded-3xl border border-emerald-300/30 shadow-[0_0_40px_rgba(52,211,153,0.35)]" />
                  <div className="absolute left-0 top-1/2 h-1 w-full animate-ping bg-cyan-300/60" />
                </>
              )}

              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="max-h-96 rounded-3xl object-contain shadow-2xl"
                />
              ) : (
                <div>
                  <Upload className="mx-auto mb-5 text-emerald-300" size={50} />
                  <h3 className="text-2xl font-bold">Choose Leaf Image</h3>
                  <p className="mt-3 text-slate-400">PNG, JPG atau JPEG</p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>

            <button
              onClick={predictDisease}
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <ScanLine className="animate-pulse" />
                  AI Scanning {progress}%
                </>
              ) : (
                <>
                  <Volume2 size={18} />
                  Detect Disease
                </>
              )}
            </button>

            {loading && (
              <div className="mt-5">
                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-emerald-400 shadow-[0_0_25px_#34d399] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-2 text-center text-sm text-emerald-300">
                  Neural scanning progress: {progress}%
                </p>
              </div>
            )}
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-400/10 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30">
                <ShieldCheck />
              </div>

              <div>
                <h3 className="text-3xl font-black">AI Result</h3>
                <p className="text-slate-400">
                  ChatGPT-style diagnosis and recommendation
                </p>
              </div>
            </div>

            {!result && !loading && (
              <div className="grid min-h-96 place-items-center rounded-3xl border border-white/10 bg-slate-950 p-8 text-center">
                <div>
                  <Bot className="mx-auto mb-5 text-emerald-300" size={60} />
                  <p className="text-slate-400">
                    AI siap menganalisis daun padi kamu.
                  </p>
                </div>
              </div>
            )}

            {loading && (
              <div className="grid min-h-96 place-items-center rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-8 text-center">
                <div>
                  <div className="mx-auto mb-6 h-24 w-24 animate-spin rounded-full border-4 border-emerald-300 border-t-transparent shadow-[0_0_40px_#34d399]" />

                  <h4 className="text-2xl font-bold text-emerald-300">
                    AI is scanning...
                  </h4>

                  <p className="mt-3 text-slate-400">
                    Membaca pola visual dan tekstur daun padi.
                  </p>

                  <p className="mt-5 text-4xl font-black text-white">
                    {progress}%
                  </p>
                </div>
              </div>
            )}

            {result && !loading && (
              <div className="rounded-3xl border border-emerald-300/20 bg-slate-950/80 p-7 shadow-inner">
                <div className="mb-5 flex items-center gap-3">
                  <Sparkles className="text-emerald-300" />
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
                    AI Diagnosis
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-slate-400">Detected Disease</p>
                  <h4 className="mt-2 text-4xl font-black text-white">
                    {info.name}
                  </h4>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">Confidence</span>
                    <span className="font-bold text-emerald-300">
                      {confidence}%
                    </span>
                  </div>

                  <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-emerald-400 shadow-[0_0_25px_#34d399] transition-all duration-700"
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/[0.04] p-5">
                  <p className="font-bold text-cyan-300">Penjelasan AI</p>
                  <p className="mt-3 leading-8 text-slate-300">{info.desc}</p>
                </div>

                <div className="mt-5 rounded-2xl bg-emerald-300/10 p-5">
                  <p className="font-bold text-emerald-200">
                    Rekomendasi Penanganan
                  </p>
                  <p className="mt-3 leading-8 text-slate-300">
                    {info.solution}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-400">
                  Model ID: {MODEL_ID}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}