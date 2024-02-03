import { useState } from "react";
import "./ContactForm.scss";
import emailJs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );

    emailJs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Tsotne",
          from_email: form.email,
          to_email: "tsotnetsirekidze22@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setShowToast(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.log(error, process.env.EMAILJS_PUBLIC_KEY);
      });
  };

  return (
    <section className="contact">
      <div className="">
        <h3 className="mb-3">Contact Us</h3>

        <form action="" className="w-100" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input form-control"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input form-control"
            required
            value={form.email}
            onChange={handleChange}
          />
          <div className="mb-3">
            <textarea
              className="textarea form-control"
              rows={3}
              placeholder="Message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="d-flex align-items-center gap-3 mt-4">
            <button type="submit" className="btn send-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {showToast && (
              <div
                onTransitionEnd={() => setShowToast(false)}
                className={`d-flex bg-success p-2 rounded-2 align-items-center gap-2 ${
                  showToast ? "" : "alert-hidden"
                }`}
              >
                <span className="text-white ">
                  Thanks! Your message has been sent.
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
