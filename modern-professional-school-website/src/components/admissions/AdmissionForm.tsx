import { useState, type ChangeEvent, type FormEvent } from "react";
import { HiCheckCircle, HiArrowPath, HiPaperAirplane } from "react-icons/hi2";
import { CLASSES_OFFERED } from "../../data/schoolData";

interface FormState {
  studentName: string;
  dob: string;
  gender: string;
  classApplying: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  occupation: string;
  previousSchool: string;
  medicalConditions: string;
  specialNeeds: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  studentName: "",
  dob: "",
  gender: "",
  classApplying: "",
  parentName: "",
  phone: "",
  email: "",
  address: "",
  occupation: "",
  previousSchool: "",
  medicalConditions: "",
  specialNeeds: "",
  message: "",
};

const REQUIRED_FIELDS: (keyof FormState)[] = [
  "studentName",
  "dob",
  "gender",
  "classApplying",
  "parentName",
  "phone",
  "email",
  "address",
  "occupation",
];

type Errors = Partial<Record<keyof FormState, string>>;

function Field({
  label,
  required,
  children,
  error,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-brand-red">{error}</p>}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

export default function AdmissionForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!form[field] || !form[field].trim()) {
        newErrors[field] = "This field is required.";
      }
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.phone && !/^[+0-9\s-]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitted(false);
      return;
    }
    // NOTE: Placeholder submission handler — ready to be wired to a real
    // backend / admissions management API in the future.
    console.log("Admission application submitted:", form);
    setSubmitted(true);
    setForm(INITIAL_STATE);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleReset = () => {
    setForm(INITIAL_STATE);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div id="apply" className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-100 sm:p-10">
      {submitted && (
        <div className="mb-8 flex items-start gap-3 rounded-2xl bg-green-50 p-5 text-green-800 ring-1 ring-green-200">
          <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />
          <div>
            <p className="font-bold">Application submitted successfully!</p>
            <p className="text-sm">
              Thank you for applying to Enkakenya Ng'ejuk Testimony School. Our admissions office
              will contact you shortly at the phone number or email provided.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-10">
        {/* Student Information */}
        <fieldset>
          <legend className="mb-5 font-heading text-lg font-extrabold text-brand-navy">
            Student Information
          </legend>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Student Name" required error={errors.studentName}>
              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                placeholder="e.g. Sankale Lemayian"
                className={inputClasses}
              />
            </Field>
            <Field label="Date of Birth" required error={errors.dob}>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className={inputClasses}
              />
            </Field>
            <Field label="Gender" required error={errors.gender}>
              <select name="gender" value={form.gender} onChange={handleChange} className={inputClasses}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Field>
            <Field label="Class Applying For" required error={errors.classApplying}>
              <select
                name="classApplying"
                value={form.classApplying}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select class</option>
                {CLASSES_OFFERED.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </fieldset>

        {/* Parent Information */}
        <fieldset>
          <legend className="mb-5 font-heading text-lg font-extrabold text-brand-navy">
            Parent / Guardian Information
          </legend>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Parent/Guardian Name" required error={errors.parentName}>
              <input
                type="text"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="Full name"
                className={inputClasses}
              />
            </Field>
            <Field label="Phone Number" required error={errors.phone}>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0119 126 378"
                className={inputClasses}
              />
            </Field>
            <Field label="Email Address" required error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClasses}
              />
            </Field>
            <Field label="Occupation" required error={errors.occupation}>
              <input
                type="text"
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                placeholder="e.g. Farmer, Teacher, Business Owner"
                className={inputClasses}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Home Address" required error={errors.address}>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="e.g. Suswa Town, Narok County"
                  className={inputClasses}
                />
              </Field>
            </div>
          </div>
        </fieldset>

        {/* Additional Information */}
        <fieldset>
          <legend className="mb-5 font-heading text-lg font-extrabold text-brand-navy">
            Additional Information
          </legend>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Previous School (if any)">
              <input
                type="text"
                name="previousSchool"
                value={form.previousSchool}
                onChange={handleChange}
                placeholder="Name of previous school"
                className={inputClasses}
              />
            </Field>
            <Field label="Medical Conditions (if any)">
              <input
                type="text"
                name="medicalConditions"
                value={form.medicalConditions}
                onChange={handleChange}
                placeholder="e.g. Asthma, Allergies"
                className={inputClasses}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Special Needs (if any)">
                <input
                  type="text"
                  name="specialNeeds"
                  value={form.specialNeeds}
                  onChange={handleChange}
                  placeholder="Please describe any special learning needs"
                  className={inputClasses}
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Message">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us anything else we should know..."
                  className={inputClasses}
                />
              </Field>
            </div>
          </div>
        </fieldset>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="submit"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-200 transition hover:scale-[1.02] hover:bg-red-600"
          >
            <HiPaperAirplane className="h-5 w-5" />
            Submit Application
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 text-base font-bold text-slate-600 transition hover:border-brand-blue hover:text-brand-blue"
          >
            <HiArrowPath className="h-5 w-5" />
            Reset Form
          </button>
        </div>
        <p className="text-xs text-slate-400">
          Fields marked with <span className="text-brand-red">*</span> are required. Your
          information is kept confidential and used solely for admissions purposes.
        </p>
      </form>
    </div>
  );
}
