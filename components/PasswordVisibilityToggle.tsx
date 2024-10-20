"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordVisibilityToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
    const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = showPassword ? "password" : "text";
    }
  };

  return (
    <button
      type="button"
      onClick={toggleVisibility}
      className="absolute inset-y-0 right-0 pr-3 flex items-center"
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4 text-gray-400" />
      ) : (
        <Eye className="h-4 w-4 text-gray-400" />
      )}
    </button>
  );
}