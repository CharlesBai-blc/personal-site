"use client";

import { useState } from "react";
import Nav from "@/components/layout/Nav";
import Logo from "@/components/layout/Logo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const MAX_MESSAGE_LENGTH = 1000;

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        if (!value) return "";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email address";
      case "name":
        if (!value) return "";
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "message":
        if (!value) return "";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > MAX_MESSAGE_LENGTH)
          return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const backendUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Logo />
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-12 w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              contact
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              let&apos;s connect
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`block font-light text-foreground mb-2 text-sm transition-all ${
                    focusedField === "name" ? "opacity-100" : "opacity-70"
                  }`}
                >
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none transition-all font-light ${
                    fieldErrors.name
                      ? "border-red-400/50 focus:bg-red-500/10"
                      : focusedField === "name"
                      ? "border-white/50 bg-white/20 shadow-lg"
                      : "border-white/30 focus:bg-white/20"
                  }`}
                  placeholder="your name"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-xs text-red-400 font-light">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className={`block font-light text-foreground mb-2 text-sm transition-all ${
                    focusedField === "email" ? "opacity-100" : "opacity-70"
                  }`}
                >
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none transition-all font-light ${
                    fieldErrors.email
                      ? "border-red-400/50 focus:bg-red-500/10"
                      : focusedField === "email"
                      ? "border-white/50 bg-white/20 shadow-lg"
                      : "border-white/30 focus:bg-white/20"
                  }`}
                  placeholder="your.email@example.com"
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-red-400 font-light">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="message"
                    className={`block font-light text-foreground text-sm transition-all ${
                      focusedField === "message" ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    message
                  </label>
                  <span
                    className={`text-xs font-mono transition-all ${
                      formData.message.length > MAX_MESSAGE_LENGTH * 0.9
                        ? "text-red-400"
                        : "text-foreground/40"
                    }`}
                  >
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none transition-all font-light resize-none ${
                    fieldErrors.message
                      ? "border-red-400/50 focus:bg-red-500/10"
                      : focusedField === "message"
                      ? "border-white/50 bg-white/20 shadow-lg"
                      : "border-white/30 focus:bg-white/20"
                  }`}
                  placeholder="tell me about your project or how I can help..."
                ></textarea>
                {fieldErrors.message && (
                  <p className="mt-1 text-xs text-red-400 font-light">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg text-sm font-light animate-in fade-in slide-in-from-top-2 duration-300 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-100"
                      : "bg-red-500/20 border border-red-500/30 text-red-100"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !!fieldErrors.name ||
                  !!fieldErrors.email ||
                  !!fieldErrors.message ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-6 py-3 font-light text-foreground hover:bg-white/30 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/20 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin"></span>
                      sending...
                    </span>
                  ) : (
                    "send message"
                  )}
                </span>
                {!isSubmitting && (
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                )}
              </button>
            </form>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
            <h2 className="text-xl font-light text-foreground mb-6 font-display">
              find me
            </h2>
            <div className="space-y-6">
              <a
                href="mailto:cb06blc@gmail.com"
                className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-foreground opacity-60 block mb-1">
                    email
                  </span>
                  <span className="font-light text-foreground group-hover:opacity-80 transition-opacity">
                    cb06blc@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/charles-bai06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-foreground opacity-60 block mb-1">
                    linkedin
                  </span>
                  <span className="font-light text-foreground group-hover:opacity-80 transition-opacity">
                    linkedin.com/in/charles-bai06
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/CharlesBai-blc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-foreground opacity-60 block mb-1">
                    github
                  </span>
                  <span className="font-light text-foreground group-hover:opacity-80 transition-opacity">
                    github.com/CharlesBai-blc
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
