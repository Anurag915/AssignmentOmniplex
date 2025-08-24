"use client";

import React from "react";

interface CheckoutButtonProps {
  productId: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ productId }) => {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        alert("Checkout failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;