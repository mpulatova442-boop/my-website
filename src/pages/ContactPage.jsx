import { Mail, MapPin, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';
import { SocialLinks } from '../components/ui/SocialLinks';
import { profile } from '../data/profile';
import { validateContactForm } from '../utils/contact';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

export function ContactPage() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    if (status !== 'success') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setFeedbackMessage('');
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [status]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateContactForm(formValues);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus('error');
      setFeedbackMessage('Please fix the highlighted fields and try again.');
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 900);
      });

      setStatus('success');
      setFeedbackMessage('Thanks for reaching out. Your message has been captured successfully.');
      setErrors({});
      setFormValues(initialFormState);
    } catch (submitError) {
      setStatus('error');
      setFeedbackMessage('Something went wrong while sending your message. Please try again.');
    }
  };

  return (
    <>
      <SEO
        description="Get in touch with Munisa Polatova about internships, collaborations, student projects, cybersecurity, and frontend development."
        pathname="/contact"
        title="Contact"
      />

      <section className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="space-y-6">
            <div className="panel px-6 py-8 sm:px-8">
              <span className="section-kicker">Contact</span>
              <h1 className="mt-4 text-4xl font-bold text-balance">Let&apos;s connect and grow through meaningful tech projects.</h1>
              <p className="mt-4">
                I am always happy to connect about internships, student collaborations, cybersecurity, frontend development, and opportunities to learn through real work.
              </p>
            </div>

            <div className="panel px-6 py-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Email</p>
                  <a className="mt-2 inline-flex text-lg font-semibold text-ink transition hover:text-accent" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Location</p>
                  <p className="mt-2 text-lg font-semibold text-ink">{profile.location}</p>
                </div>
              </div>

              <div className="mt-6">
                <SocialLinks links={profile.socials} />
              </div>
            </div>
          </div>

          <div className="panel px-6 py-8 sm:px-8">
            <form className="space-y-5" noValidate onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="input-shell"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name"
                    type="text"
                    value={formValues.name}
                  />
                  {errors.name ? <p className="mt-2 text-sm text-secondary">{errors.name}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="input-shell"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="you@example.com"
                    type="email"
                    value={formValues.email}
                  />
                  {errors.email ? <p className="mt-2 text-sm text-secondary">{errors.email}</p> : null}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="input-shell min-h-[180px]"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell me about your project, audience, and timeline."
                  value={formValues.message}
                />
                {errors.message ? <p className="mt-2 text-sm text-secondary">{errors.message}</p> : null}
              </div>

              {feedbackMessage ? (
                <div
                  aria-live="polite"
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'border-accent/20 bg-accent/10 text-accent'
                      : 'border-secondary/20 bg-secondary/10 text-secondary'
                  }`}
                >
                  {feedbackMessage}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  icon={<Send size={16} />}
                  type="submit"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
                <Button href={`mailto:${profile.email}`} variant="secondary">
                  Email Instead
                </Button>
              </div>

              <p className="text-sm">
                This demo uses local form validation and a simulated success flow. Swap the submit handler with EmailJS or your preferred backend service when you&apos;re ready.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
