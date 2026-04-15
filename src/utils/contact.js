const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please share a bit more detail so I can respond thoughtfully.';
  }

  return errors;
}
