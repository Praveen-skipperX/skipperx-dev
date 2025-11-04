import React, { useState } from "react";
import "./CareerFormSection.css";

const CareerFormSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  return (
    <section className="career-form-section">
      <div className="title-wrapper">
        <div className="lef" />
        <h2><span className="bold">Still Confused? We’ve Got You</span></h2>
        <div className="righ" />
      </div>
      <p className="subtitle1">
        Insights from those who’ve walked the path you're about to take.
      </p>

      <form className="career-form" onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setToast({ show: false, message: '', type: '' });
        const form = e.target;
        const formData = new FormData();
        formData.append('FormName', 'CareerForm');
        formData.append('firstName', form[0].value);
        formData.append('areaOfInterest', form[1].value);
        formData.append('phoneNumber', form[2].value);
        formData.append('email', form[3].value);
        try {
          await fetch('https://script.google.com/macros/s/AKfycbyk1LWW9RMXuExhh-vTac4DGRLtttdCYxbUG6-TKP2W0iB51mHlDxew3yx-oOCIvcCQ/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
          });
          setToast({ show: true, message: 'Form submitted successfully! Our team will contact you soon.', type: 'success' });
          form.reset();
        } catch (err) {
          setToast({ show: true, message: 'There was an error submitting the form. Please try again.', type: 'error' });
        } finally {
          setSubmitting(false);
          setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
        }
      }}>
        <div className="input-row">
          <input type="text" placeholder="First Name*" required />
          <select required defaultValue="">
            <option value="" disabled hidden>Interest*</option>
            <option value="drone">Drone Engineering</option>
            <option value="robot">Robot Engineering</option>
            <option value="arvr">AR/VR</option>
          </select>
        </div>

        <div className="input-row">
          <div className="phone-input">
            <span>+91</span>
            <input type="tel" placeholder="XXXXXXXXXX" required />
          </div>
          <input type="email" placeholder="E-mail*" required />
        </div>

        <button type="submit" className="submit-btn" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
        {/* Toast notification */}
        {toast && toast.show && (
          <div
            style={{
              position: 'fixed',
              bottom: 30,
              right: 30,
              zIndex: 9999,
              background: toast.type === 'success' ? '#4BB543' : '#D8000C',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: 7,
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              fontSize: 14,
              fontWeight: 500,
              minWidth: 180,
              maxWidth: 260,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              opacity: toast.show ? 1 : 0,
              transform: toast.show ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)',
            }}
          >
            <span style={{display:'flex',alignItems:'center'}}>
              {toast.type === 'success' ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.2"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.2"/><path d="M15 9l-6 6M9 9l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </span>
            <span style={{lineHeight:1.3}}>{toast.message}</span>
          </div>
        )}
      </form>

      <p className="disclaimer">Our experts revert back usually within 24 hours</p>
    </section>
  );
};

export default CareerFormSection;
