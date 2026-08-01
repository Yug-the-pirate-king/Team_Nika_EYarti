import { Play, RefreshCw } from 'lucide-react';

// Props accepted by the ActionButtons component.
// All props are optional so the original static usage remains unchanged.
interface ActionButtonsProps {
  /** Label/text for the primary action button. */
  primaryLabel?: string;
  /** Label/text for the secondary action button. */
  secondaryLabel?: string;
  /** Click handler for the primary action button. */
  onPrimaryClick?: () => void;
  /** Click handler for the secondary action button. */
  onSecondaryClick?: () => void;
  /** Disables both buttons when true. */
  disabled?: boolean;
}

export function ActionButtons({
  primaryLabel = "I'M RUNNING",
  secondaryLabel = 'Find Next',
  onPrimaryClick,
  onSecondaryClick,
  disabled = false,
}: ActionButtonsProps = {}) {
  // Validate labels: they must be non-empty strings.
  // Fall back to the original defaults if validation fails.
  const validPrimaryLabel =
    typeof primaryLabel === 'string' && primaryLabel.trim().length > 0
      ? primaryLabel
      : "I'M RUNNING";

  const validSecondaryLabel =
    typeof secondaryLabel === 'string' && secondaryLabel.trim().length > 0
      ? secondaryLabel
      : 'Find Next';

  // Validate click handlers: only functions are accepted when provided.
  const safePrimaryClick =
    typeof onPrimaryClick === 'function' ? onPrimaryClick : undefined;
  const safeSecondaryClick =
    typeof onSecondaryClick === 'function' ? onSecondaryClick : undefined;

  // Primary button click handler wrapped with error handling.
  const handlePrimaryClick = (): void => {
    try {
      safePrimaryClick?.();
    } catch (error) {
      // Log the error without breaking the surrounding UI.
      console.error('Error in primary button click handler:', error);
    }
  };

  // Secondary button click handler wrapped with error handling.
  const handleSecondaryClick = (): void => {
    try {
      safeSecondaryClick?.();
    } catch (error) {
      console.error('Error in secondary button click handler:', error);
    }
  };

  return (
    <div className="flex gap-4">
      {/* Primary action button */}
      <button
        type="button"
        disabled={disabled}
        aria-label={validPrimaryLabel}
        onClick={handlePrimaryClick}
        className="flex-1 bg-[#536dfe] text-white rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-semibold hover:bg-[#4557d8] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="w-5 h-5" fill="white" />
        {validPrimaryLabel}
      </button>

      {/* Secondary action button */}
      <button
        type="button"
        disabled={disabled}
        aria-label={validSecondaryLabel}
        onClick={handleSecondaryClick}
        className="flex-1 bg-white text-slate-700 rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-semibold hover:bg-slate-50 transition-colors border-2 border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw className="w-5 h-5" />
        {validSecondaryLabel}
      </button>
    </div>
  );
}