import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import { contactForm, author } from "@/content/site";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  return (
    <div>
      <Helmet>
        <title>Contact · MSI</title>
      </Helmet>
      <Section title="Contact">
        <form
          method="POST"
          action={
            contactForm === "formspree"
              ? "https://formspree.io/f/yourcode"
              : contactForm === "web3forms"
              ? "https://api.web3forms.com/submit"
              : undefined
          }
          className="space-y-4 max-w-lg"
          onSubmit={(e) => {
            if (contactForm === "mailto") return;
            const form = e.currentTarget as HTMLFormElement;
            if (!form.action) return;
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, { method: "POST", body: data })
              .then(() => setStatus("success"))
              .catch(() => setStatus("error"));
          }}
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="w-full rounded border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-10 items-center rounded-xl bg-primary px-4 text-sm font-medium text-white hover:bg-primary/90"
              type="submit"
            >
              Send
            </button>
            <a
              className="inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-sm hover:border-accent hover:text-accent dark:border-slate-700"
              href={`mailto:${author.email}`}
            >
              Email instead
            </a>
          </div>
          {status === "success" && (
            <p className="text-green-600">
              Thanks! I will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </Section>
    </div>
  );
}
