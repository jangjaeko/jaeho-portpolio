import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrelkwye");
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: linksRef, isVisible: linksVisible } =
    useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -100px 0px" });
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -100px 0px" });
  const { ref: footerRef, isVisible: footerVisible } =
    useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.location.href = "/";
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      {/* Sending Modal */}
      {state.submitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="contact-glass-card p-8 text-center max-w-sm mx-4">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto border-4 border-teal-400 border-t-transparent rounded-full animate-spin" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Sending Message...
            </h4>
            <p className="text-gray-400">
              Please wait while your message is being sent.
            </p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {state.succeeded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="contact-glass-card p-8 text-center max-w-sm mx-4">
            <div className="text-teal-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Message Sent!
            </h4>
            <p className="text-gray-400">
              Thank you for reaching out. I'll get back to you soon!
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Redirecting to home in 3 seconds...
            </p>
          </div>
        </div>
      )}

      <section id="Contact" className="contact-section">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`max-w-6xl mx-auto mb-16 text-center slide-in-section ${
          headerVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500 mb-4">
          Contact
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-300 to-cyan-500 rounded-full mx-auto" />
        <p className="text-gray-400 mt-6 text-lg">
          Feel free to reach out to me!
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Links */}
          <div
            ref={linksRef}
            className={`contact-glass-card p-8 slide-in-left ${
              linksVisible ? "visible" : ""
            }`}
          >
            <div className="glow-effect" />
            <h3 className="text-2xl font-semibold text-white mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <a
                href="https://github.com/jangjaeko"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="w-6 h-6"
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
                <div className="flex-1">
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400 text-sm">github.com/jangjaeko</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="mailto:jangjaeko45@gmail.com"
                className="contact-link-card"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">jangjaeko45@gmail.com</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/jaeho-chang-09b1ab268/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <div className="contact-icon-wrapper">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Jaeho Chang</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="corner-gradient corner-gradient-lg" />
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`contact-glass-card p-8 slide-in-right ${
              formVisible ? "visible" : ""
            }`}
          >
            <div className="glow-effect" />
            <h3 className="text-2xl font-semibold text-white mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="contact-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="contact-input"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="contact-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="contact-input"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="contact-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="contact-input contact-textarea"
                    placeholder="Your message..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="contact-submit-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>

            <div className="corner-gradient corner-gradient-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div
        ref={footerRef}
        className={`max-w-6xl mx-auto mt-16 flex items-center justify-center gap-4 slide-in-section ${
          footerVisible ? "visible" : ""
        }`}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <div className="contact-badge">Let's build something together</div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
    </section>
    </>
  );
}
