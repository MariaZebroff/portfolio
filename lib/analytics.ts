export const trackFormSubmit = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "form_submit", {
      form_name: "contact",
      form_location: "homepage",
    });
  }
};
