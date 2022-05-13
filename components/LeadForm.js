import { toast } from "react-toastify";

const LeadForm = (product) => {
  console.log(product);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_API_URL}leads/`, {
        method: "POST",
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          status: "new",
          product: product.product,
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
      e.target.name.value = "";
      toast.success("Thank you for your submission, we will be in touch! 👌");
    } else {
      e.target.email.value = "";
      e.target.name.value = "";
      toast.warning(
        "It looks like you have already submitted your details previously!"
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-2xl font-medium text-gray-900">
        Fill in your details below and we will take care of the rest.
      </p>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-last-name"
          >
            Name
          </label>
          <input
            className="block w-full appearance-none border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-last-name"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-2 w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-password"
          >
            Email
          </label>
          <input
            className="mb-3 block w-full appearance-none border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-password"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="flex w-full pr-4">
          <button className="ml-auto bg-[#FECE7E] px-4 py-2 uppercase">
            Learn More
          </button>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;
