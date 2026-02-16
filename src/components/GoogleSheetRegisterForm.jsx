import { useState } from "react";

const GoogleSheetRegisterForm = ({ formName }) => {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyk1LWW9RMXuExhh-vTac4DGRLtttdCYxbUG6-TKP2W0iB51mHlDxew3yx-oOCIvcCQ/exec";

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    const f = e.target.elements;

    const firstName = f.firstName.value.trim();
    const interest = f.areaOfInterest.value;
    const phoneNumber = f.phoneNumber.value.replace(/\D/g, "");
    const email = f.email.value.trim();
    const collegeName = f.collegeName.value.trim();

    if (!/^\d{10}$/.test(phoneNumber)) {
      showToast("Enter a valid 10-digit phone number", "error");
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("FormName", formName || "DoersForm");
    formData.append("firstName", firstName);
    formData.append("areaOfInterest", interest);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("collegeName", collegeName);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      showToast("Form submitted successfully!", "success");
      e.target.reset();
    } catch (err) {
      showToast("Form submission failed!", "error");
    }

    setSubmitting(false);
  };

  return (
    <>
      <form className="doers-register-form" onSubmit={handleSubmit}>
        <div className="doers-form-group-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
            className="doers-form-input"
          />

          <select
            name="areaOfInterest"
            required
            className="doers-form-input doers-form-select"
            defaultValue=""
          >
            <option value="" disabled>
              Interest*
            </option>
            <option value="Digitalpreneur">Digitalpreneur</option>
          </select>
        </div>

        <div className="doers-form-group-row">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="+91 XXXXXXXXXX"
            required
            className="doers-form-input"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            required
            className="doers-form-input"
          />
        </div>

        <div className="doers-form-group-single">
          <input
            type="text"
            name="collegeName"
            placeholder="College Name*"
            required
            className="doers-form-input"
          />
        </div>

        <button
          type="submit"
          className="doers-form-submit-button"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit enquiry"}
        </button>
      </form>

      {toast.show && (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            background: toast.type === "success" ? "#4BB543" : "#D8000C",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 6,
            fontSize: 14,
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            transition: "0.3s",
          }}
        >
          {toast.message}
        </div>
      )}
    </>
  );
};

export default GoogleSheetRegisterForm;