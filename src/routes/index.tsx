import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const GOOGLE_ADS_CONVERSION = "AW-18455663339/hL3YCOO9hfwcEOulrOBE";

const INVITE_LINK =
  "https://www.uber.com/signup/drive/deliver/?invite_code=11wbthb";

const INVITE_CODE = new URL(INVITE_LINK).searchParams.get("invite_code");
let hasTrackedSignupConversion = false;

function trackSignupConversion() {
  if (
    hasTrackedSignupConversion ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  hasTrackedSignupConversion = true;
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION,
    transport_type: "beacon",
  });
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drive or Deliver in the USA | Get Started" },
      { httpEquiv: "refresh", content: `0;url=${INVITE_LINK}` },
      {
        name: "description",
        content:
          "Explore flexible driving and bike delivery opportunities in the USA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    trackSignupConversion();
    window.location.replace(INVITE_LINK);
  }, []);

  return null;
}
