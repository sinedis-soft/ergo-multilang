"use client";

import React from "react";

type SubmissionModalProps = {
  open: boolean;
  message: string;
  onClose: () => void;
  variant: "success" | "warning";
};

export default function SubmissionModal({ open, message, onClose, variant }: SubmissionModalProps) {
  if (!open) return null;

  const isSuccess = variant === "success";

  return (
    <div className="submit-modal__overlay" role="dialog" aria-modal="true" aria-label="Submission status">
      <div className={isSuccess ? "submit-modal submit-modal--success" : "submit-modal submit-modal--warning"}>
        <button
          type="button"
          className={isSuccess ? "submit-modal__close submit-modal__close--light" : "submit-modal__close"}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <p className="submit-modal__message">{message}</p>
      </div>
    </div>
  );
}
