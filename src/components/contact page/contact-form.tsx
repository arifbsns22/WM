"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the WhatsApp message
    const businessNumber = "8801681583033";
    const text =
      `*New Inquiry from Watermelon Digital Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${businessNumber}?text=${text}`;

    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-2xl animate-in fade-in zoom-in duration-500">
        <div className="size-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Redirected to WhatsApp!
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xs">
          Your message has been formatted. Please hit "Send" in the WhatsApp
          window to complete your inquiry.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 rounded-full"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Send us a Message
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Fill out the form below and it will open directly in WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm text-zinc-900 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Email Address
            </label>
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full h-12 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm text-zinc-900 dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm appearance-none cursor-pointer text-zinc-900 dark:text-white"
          >
            <option>General Inquiry</option>
            <option>Project Request</option>
            <option>Support</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Your Message
          </label>
          <textarea
            required
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm resize-none text-black dark:text-white"
          ></textarea>
        </div>

        <Button
          disabled={isSubmitting}
          className="w-full h-14 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20"
        >
          {isSubmitting ? (
            <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Send via WhatsApp</span>
              <MessageCircle className="size-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
