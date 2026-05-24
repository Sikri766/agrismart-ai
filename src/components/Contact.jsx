import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Harap isi nama, email, dan pesan terlebih dahulu.");
      return;
    }

    alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi AgriSmart AI.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-emerald-300">Contact</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Let’s build the future of smart farming.
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Project ini dikembangkan sebagai website edukatif dan social impact platform untuk kompetisi Web Design.
          </p>

          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-3 text-slate-300">
              <Mail className="text-emerald-300" /> agrismartai24@gmail.com
            </p>

            <p className="flex items-center gap-3 text-slate-300">
              <MapPin className="text-emerald-300" /> University of Teknokrat Indonesia
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none"
            placeholder="Your Name"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none"
            placeholder="Your Email"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mb-4 h-32 w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none"
            placeholder="Message"
          />

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-4 font-bold text-slate-950 hover:bg-emerald-300"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}