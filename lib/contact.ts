export const contactContent = {
  heading: "Contact.",
  subheading: "Let's build something together.",
  aside: {
    body:
      "Tell me a little about your business and what you're after — I'll get back to you within a day or two.",
    email: {
      label: "Email",
      address: "info@mariasdesignstudio.ca",
      href: "mailto:info@mariasdesignstudio.ca",
    },
    phone: {
      label: "Phone",
      display: "250-260-0338",
      href: "tel:+12502600338",
    },
  },
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Tell me about your project",
    submitLabel: "Send message",
    submittingLabel: "Sending…",
    sendAnotherLabel: "Send another message",
    successMessage:
      "Thanks — your message was sent. I’ll get back to you soon.",
    errorGeneric:
      "Something went wrong. Please try again or use the email link beside the form.",
    verificationNeeded: "Please complete the verification challenge.",
    configMissing:
      "The contact form isn’t configured on this environment yet.",
    validationSummary: "Please correct the fields below.",
  },
};

/** Shared copy for `validateContactFields` (API + client). */
export const contactValidationMessages = {
  nameRequired: "Please enter your name.",
  nameTooShort: "Name must be at least 2 characters.",
  nameTooLong: "Name must be 120 characters or fewer.",
  emailRequired: "Please enter your email.",
  emailInvalid: "Please enter a valid email address.",
  emailTooLong: "Email must be 254 characters or fewer.",
  messageRequired: "Please enter a message.",
  messageTooShort: "Message must be at least 3 characters.",
  messageTooLong: "Message must be 8000 characters or fewer.",
} as const;
