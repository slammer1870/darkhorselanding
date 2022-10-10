import React, { useEffect, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";

function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    fbq("consent", "grant");
    console.log("accepting cookies");
  };
  const closeP = () => {
    setConsent(true);
    console.log("closing");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("denying cookie");
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`sticky bottom-0 w-full left-0 p-3 bg-gray-200 flex items-center justify-between text-xs md:text-base lg:text-xl ${
        consent ? "hidden" : ""
      }`}
    >
      <span className="text-medium pr-4">
        This Site use cookie, please accept them if you want
      </span>
      <div className="flex align-middle justify-end">
        <button onClick={(e) => denyCookie()} className="p-2 bg-gray-400">
          Deny
        </button>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="p-2 bg-gray-50 ml-4"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default Consent;
