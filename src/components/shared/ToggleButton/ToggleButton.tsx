import React from "react";

export interface ToggleButtonProps {
  /**
   * Whether the toggle is currently on
   */
  isOn: boolean;
  /**
   * Callback when toggle state changes
   */
  onToggle: (isOn: boolean) => void;
  /**
   * Optional label text
   */
  label?: string;
  /**
   * Size of the toggle button
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom colors (primary color when toggle is on)
   */
  color?: "blue" | "green" | "purple" | "red" | "orange";
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  label,
  size = "md",
  color = "blue",
  disabled = false,
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    sm: {
      container: "w-10 h-5",
      circle: "w-4 h-4",
      translate: "translate-x-5",
    },
    md: {
      container: "w-14 h-7",
      circle: "w-6 h-6",
      translate: "translate-x-7",
    },
    lg: {
      container: "w-20 h-10",
      circle: "w-8 h-8",
      translate: "translate-x-10",
    },
  };

  // Color classes
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
  };

  // Focus ring classes
  const focusRingClasses = {
    blue: "focus:ring-blue-500",
    green: "focus:ring-green-500",
    purple: "focus:ring-purple-500",
    red: "focus:ring-red-500",
    orange: "focus:ring-orange-500",
  };

  const handleClick = () => {
    if (!disabled) {
      onToggle(!isOn);
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Label */}
      {label && (
        <span
          className={`text-gray-700 font-medium ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {label}
        </span>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        onClick={handleClick}
        disabled={disabled}
        className={`
          relative inline-flex items-center rounded-full
          transition-colors duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            focusRingClasses[color]
          }
          ${sizeClasses[size].container}
          ${isOn ? colorClasses[color] : "bg-gray-300"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        {/* Toggle Circle */}
        <span
          className={`
            inline-block rounded-full bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${sizeClasses[size].circle}
            ${isOn ? sizeClasses[size].translate : "translate-x-0.5"}
          `}
        />
      </button>
    </div>
  );
};
