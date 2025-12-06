/**
 * Enhanced Loading Component
 * Displays a centrally located loading spinner and optional text.
 * NOTE: This code assumes the 'React' environment is globally available or implicitly imported.
 * @param {string} message - Optional loading message to display below the spinner.
 * @param {string} size - The size of the spinner ('sm', 'md', 'lg'). Defaults to 'md'.
 * @param {string} colorClass - Tailwind class for the spinner color (e.g., 'border-t-indigo-500').
 */
const EnhancedLoading = ({
  message = "Loading content, please wait...",
  size = "md",
  colorClass = "border-t-indigo-500",
}) => {
  // Define Tailwind classes based on the 'size' prop
  let spinnerSizeClasses = "";
  let textSizeClasses = "";

  switch (size) {
    case "sm":
      spinnerSizeClasses = "w-8 h-8 border-3";
      textSizeClasses = "text-sm";
      break;
    case "lg":
      spinnerSizeClasses = "w-16 h-16 border-6";
      textSizeClasses = "text-lg";
      break;
    case "md":
    default:
      spinnerSizeClasses = "w-12 h-12 border-4";
      textSizeClasses = "text-base";
      break;
  }

  // Combined classes for the spinner div
  const spinnerClasses = `border-gray-200 rounded-full animate-spin ${spinnerSizeClasses} ${colorClass}`;

  return (
    // Container ensures the spinner is centered in the viewport
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl">
        {/* The Spinner */}
        <div className={spinnerClasses} role="status" aria-live="polite">
          {/* A visually hidden span for screen readers (Accessibility) */}
          <span className="sr-only">Loading...</span>
        </div>

        {/* Loading Message */}
        <p className={`mt-4 text-gray-700 font-medium ${textSizeClasses}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default EnhancedLoading;
