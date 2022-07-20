import React, { useState } from "react";
import TermsOfService from "../components/TermsOfService";

import { toast } from "react-toastify";

import * as fbq from "../lib/fpixel";

const Form = () => {
  const [tos, setTos] = useState();

  const handleTos = () => {
    if (tos) {
      setTos(false);
    } else {
      setTos(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fbq.event("CompleteRegistration");
    const res = await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_API_URL}leads/`, {
        method: "POST",
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          phone_number: e.target.phone.value,
          status: "new",
          product: "Landing Page",
        }),
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Loading...",
        //success: "Your subscription has been created! 👌",
        //error: "Subscription creation failed... 🤯",
      }
    );

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      e.target.email.value = "";
      e.target.phone.value = "";
      e.target.name.value = "";
      toast.success("Thank you for your submission, we will be in touch! 👌");
    } else {
      e.target.email.value = "";
      e.target.phone.value = "";
      e.target.name.value = "";
      toast.warning(
        "It looks like you have already submitted your details previously!"
      );
    }
  };

  return (
    <div
      id="signup"
      className="container mx-auto my-12 px-4 text-gray-900 md:my-20 md:flex md:items-center"
    >
      <div className="md:w-1/2 md:pr-12">
        <h5 className="mb-8 text-3xl font-medium md:mb-4 lg:text-4xl">
          Ready to get started?
        </h5>
        <p className="mb-4 text-gray-700 md:text-xl lg:text-2xl">
          Enter your details and we will do the rest!
        </p>
      </div>
      <div className="rounded bg-gray-200 p-8 md:w-1/2">
        <form className="" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              className="mt-2 w-full border border-gray-200 p-2"
              name="name"
              placeholder="Name"
              required
            ></input>
          </div>
          <div className="relative mb-4">
            <label className="font-medium">
              Phone Number <span className="text-gray-500">(optional)</span>
            </label>
            <input
              type="phone"
              className="mt-2 w-full border border-gray-200 p-2"
              name="phone"
              placeholder="Phone Number"
            ></input>
          </div>
          <div className="relative mb-4">
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="mt-2 w-full border border-gray-200 p-2"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>

          <div className="relative mb-4">
            <input
              type="checkbox"
              id="gdpr"
              name="gdpr"
              className="mr-2"
              required
            />
            <label className="mt-3 text-xs text-gray-500 lg:text-base">
              I consent to Dark Horse Strength&apos;s{" "}
              <span className="underline" onClick={handleTos}>
                terms of service
              </span>
            </label>
          </div>
          <button className="w-full bg-purple-400 p-2 text-white">
            Submit
          </button>
        </form>
      </div>
      {tos && <TermsOfService handleTos={handleTos} />}
    </div>
  );
};

export default Form;
