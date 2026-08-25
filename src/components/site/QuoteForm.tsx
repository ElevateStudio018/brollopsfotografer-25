import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";

type Errors = Partial<Record<"namn" | "telefon" | "epost" | "typ", string>>;

const initial = { namn: "", telefon: "", epost: "", typ: "", beskrivning: "" };

const labelClass = "block text-[14px] font-medium text-navy mb-2";
const fieldClass =
  "w-full min-h-[48px] rounded-[2px] border border-[rgba(3,15,39,0.18)] bg-white px-4 py-3 text-[16px] text-navy placeholder:text-[#9aa0ab] outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-[rgba(253,190,51,0.55)]";

export function QuoteForm({ idPrefix = "quote" }: { idPrefix?: string }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const set = (key: keyof typeof initial, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  function validate(): Errors {
    const next: Errors = {};
    if (!values.namn.trim()) next.namn = "Fyll i ditt namn";
    if (!values.telefon.trim()) next.telefon = "Fyll i ditt telefonnummer";
    if (!/^\S+@\S+\.\S+$/.test(values.epost.trim())) next.epost = "Fyll i en giltig e-postadress";
    if (!values.typ) next.typ = "Välj typ av renovering";
    return next;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setValues(initial);
      setConfirmed(true);
      window.setTimeout(() => setConfirmed(false), 4500);
    }, 1000);
  }

  return (
    <>
      {confirmed ? (
        <div
          role="status"
          className="page-fade fixed left-1/2 top-[96px] z-[80] w-[min(92vw,420px)] -translate-x-1/2 border border-[rgba(3,15,39,0.12)] bg-white px-6 py-4 shadow-[0_16px_40px_rgba(3,15,39,0.18)]"
        >
          <div className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span className="text-[16px] font-medium text-navy">Tack! Vi återkommer strax</span>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-namn`}>
            Namn
          </label>
          <input
            id={`${idPrefix}-namn`}
            className={fieldClass}
            value={values.namn}
            onChange={(e) => set("namn", e.target.value)}
            autoComplete="name"
          />
          {errors.namn ? <p className="mt-2 text-[13px]">{errors.namn}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-telefon`}>
            Telefon
          </label>
          <input
            id={`${idPrefix}-telefon`}
            type="tel"
            className={fieldClass}
            value={values.telefon}
            onChange={(e) => set("telefon", e.target.value)}
            autoComplete="tel"
          />
          {errors.telefon ? <p className="mt-2 text-[13px]">{errors.telefon}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-epost`}>
            E-post
          </label>
          <input
            id={`${idPrefix}-epost`}
            type="email"
            className={fieldClass}
            value={values.epost}
            onChange={(e) => set("epost", e.target.value)}
            autoComplete="email"
          />
          {errors.epost ? <p className="mt-2 text-[13px]">{errors.epost}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-typ`}>
            Typ av renovering
          </label>
          <select
            id={`${idPrefix}-typ`}
            className={fieldClass}
            value={values.typ}
            onChange={(e) => set("typ", e.target.value)}
          >
            <option value="">Välj alternativ</option>
            <option value="badrum">Badrum</option>
            <option value="kok">Kök</option>
            <option value="totalrenovering">Totalrenovering</option>
            <option value="maleri">Målning/ytskikt</option>
            <option value="annat">Annat</option>
          </select>
          {errors.typ ? <p className="mt-2 text-[13px]">{errors.typ}</p> : null}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-beskrivning`}>
            Kort beskrivning
          </label>
          <textarea
            id={`${idPrefix}-beskrivning`}
            rows={4}
            className={fieldClass}
            placeholder="Berätta kort om projektet, till exempel storlek, adress och önskad start."
            value={values.beskrivning}
            onChange={(e) => set("beskrivning", e.target.value)}
          />
        </div>

        <button type="submit" className="btn-base btn-yellow" disabled={sending}>
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Skickar...
            </>
          ) : (
            "Skicka förfrågan"
          )}
        </button>
      </form>
    </>
  );
}
