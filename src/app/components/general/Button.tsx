"use client";

import { AiOutlineLoading } from "react-icons/ai";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  loading?: boolean;
  label: string;
}

function Button({ className, label, loading, onClick }: ButtonProps) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={className}
      onClick={onClick}
    >
      {loading ? (
        <AiOutlineLoading className="animate-spin text-3xl" />
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
}

export default Button;
