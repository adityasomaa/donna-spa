"use client";

import { useState } from "react";
import { whatsappLink, treatments } from "@/lib/site";

const allTreatments = treatments.flatMap((g) => g.items.map((t) => t.name));

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    treatment: allTreatments[0],
    date: "",
    people: "1",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hi Donna Spa! I'd like to make a booking.`,
      ``,
      `Name: ${form.name || "-"}`,
      `Treatment: ${form.treatment}`,
      `Preferred date/time: ${form.date || "-"}`,
      `Number of people: ${form.people}`,
      form.notes ? `Notes: ${form.notes}` : ``,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-charcoal/55">
            Your name
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Sarah"
            className={field}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-charcoal/55">
            People
          </span>
          <select
            value={form.people}
            onChange={(e) => setForm({ ...form, people: e.target.value })}
            className={field}
          >
            {["1", "2", "3", "4+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-charcoal/55">
          Treatment
        </span>
        <select
          value={form.treatment}
          onChange={(e) => setForm({ ...form, treatment: e.target.value })}
          className={field}
        >
          {allTreatments.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-charcoal/55">
          Preferred date &amp; time
        </span>
        <input
          type="text"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          placeholder="e.g. Tomorrow, 7pm"
          className={field}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-charcoal/55">
          Notes (optional)
        </span>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Any preferences or requests?"
          className={`${field} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-jade px-8 py-4 font-medium text-cream transition-colors hover:bg-forest sm:w-auto"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.488-.917zm5.831-7.062c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
        </svg>
        Send via WhatsApp
      </button>

      <p className="text-xs text-charcoal/50">
        This opens WhatsApp with your details pre-filled — just hit send and we’ll
        confirm your booking.
      </p>
    </form>
  );
}
