import React from "react";
interface ErrorDisplayProps {
  error: string;
}
const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return (
    <div className="bg-red-400">
      <h4 className="text-white text-lg">{error}</h4>
    </div>
  );
};

export default ErrorDisplay;
