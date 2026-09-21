"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Wrapper from "./wrapper";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // clear the error for a field as soon as the user starts fixing it
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};

    if (!values.name.trim()) {
      next.name = "Name is required";
    }

    if (!values.email.trim()) {
      next.email = "Email is required";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      next.email = "Enter a valid email address";
    }

    if (!values.subject.trim()) {
      next.subject = "Subject is required";
    }

    if (!values.message.trim()) {
      next.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters";
    }

    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // TODO: wire this up to your actual submit endpoint
    console.log("Submitting contact form:", form);

    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <Wrapper className="flex-1 flex flex-col gap-6 border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: heading + info + map */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Let&apos;s build something great together.
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed max-w-md">
            Have a question, suggestion, or just want to say hello? We&apos;d
            love to hear from you. Feel free to reach out to us!
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700">
                <Mail className="h-4 w-4" />
              </span>
              <a
                href="mailto:info@addissoftware.com"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                info@addissoftware.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700">
                <Phone className="h-4 w-4" />
              </span>
              <a
                href="tel:+251978783525"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                +251978783525
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-700 shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <a href="#" className="text-primary hover:underline">
                AG Grace Plaza, Djibuti St, Addis Ababa (Ednamal-Golagol Road)
              </a>
            </div>
          </div>

          <div className="mt-6 w-full aspect-4/3 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=AG+Grace+Plaza+Addis+Ababa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Get In Touch Now
          </h3>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 mb-1.5"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Input"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 mb-1.5"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Input"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-800 mb-1.5"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 ${
                  errors.subject ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-800 mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Enter Input"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none resize-y focus:ring-2 focus:ring-primary/30 ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-fit inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/80 transition-colors cursor-pointer"
            >
              Get in touch
            </button>

            {submitted && (
              <p className="text-sm text-primary">
                Thanks — your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
