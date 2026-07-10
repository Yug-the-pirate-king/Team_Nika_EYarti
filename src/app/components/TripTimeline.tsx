import { Check, AlertTriangle, Zap } from 'lucide-react';
import { useMemo } from 'react';

type TimelineNodeStatus = 'completed' | 'delayed' | 'future';

interface TimelineWarning {
  title: string;
  description: string;
}

interface TimelineNode {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  status: TimelineNodeStatus;
  warning?: TimelineWarning;
}

const VALID_STATUSES: readonly TimelineNodeStatus[] = ['completed', 'delayed', 'future'];

const DEFAULT_TRIP_NODES: TimelineNode[] = [
  {
    id: 'rickshaw-to-station',
    time: '08:45 AM',
    title: 'Rickshaw to Station',
    status: 'completed',
  },
  {
    id: 'churchgate-fast',
    time: '09:12 AM (Delayed)',
    title: 'Churchgate Fast',
    subtitle: 'Virar Local • Platform 4',
    status: 'delayed',
    warning: {
      title: 'Connection Tightness: Critical',
      description: 'Rickshaw delay +7m reduced transfer window.',
    },
  },
  {
    id: 'walk-to-office',
    time: '09:58 AM',
    title: 'Walk to Office',
    subtitle: '1.2 km • 15 min',
    status: 'future',
  },
];

interface TripTimelineProps {
  tripNodes?: TimelineNode[];
}

/**
 * Logs a component-level warning in non-production environments.
 */
function warn(message: string): void {
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn(`[TripTimeline] ${message}`);
  }
}

/**
 * Validates that a value is a usable TimelineNode.
 * Returns true only when all required fields are present and correctly typed.
 */
function isValidTimelineNode(value: unknown, index: number): value is TimelineNode {
  if (!value || typeof value !== 'object') {
    warn(`Node at index ${index} is not an object and was skipped.`);
    return false;
  }

  const node = value as Record<string, unknown>;

  if (typeof node.id !== 'string' || node.id.trim().length === 0) {
    warn(`Node at index ${index} is missing a valid string id and was skipped.`);
    return false;
  }

  if (typeof node.time !== 'string' || node.time.trim().length === 0) {
    warn(`Node "${node.id}" is missing a valid time string and was skipped.`);
    return false;
  }

  if (typeof node.title !== 'string' || node.title.trim().length === 0) {
    warn(`Node "${node.id}" is missing a valid title string and was skipped.`);
    return false;
  }

  if (!VALID_STATUSES.includes(node.status as TimelineNodeStatus)) {
    warn(
      `Node "${node.id}" has invalid status "${node.status}". Expected one of: ${VALID_STATUSES.join(', ')}.`
    );
    return false;
  }

  if (node.subtitle !== undefined && typeof node.subtitle !== 'string') {
    warn(`Node "${node.id}" has an invalid subtitle and was skipped.`);
    return false;
  }

  if (node.warning !== undefined) {
    if (!node.warning || typeof node.warning !== 'object') {
      warn(`Node "${node.id}" has an invalid warning object and was skipped.`);
      return false;
    }
    const warning = node.warning as Record<string, unknown>;
    if (typeof warning.title !== 'string' || warning.title.trim().length === 0) {
      warn(`Node "${node.id}" warning is missing a valid title and was skipped.`);
      return false;
    }
    if (typeof warning.description !== 'string' || warning.description.trim().length === 0) {
      warn(`Node "${node.id}" warning is missing a valid description and was skipped.`);
      return false;
    }
  }

  return true;
}

/**
 * Validates the provided node list and removes duplicates / malformed entries.
 * Returns an empty array when the input itself is not an array.
 */
function useValidatedTripNodes(tripNodes: TimelineNode[] | undefined): TimelineNode[] {
  return useMemo(() => {
    if (!Array.isArray(tripNodes)) {
      warn('tripNodes prop must be an array. Falling back to empty timeline.');
      return [];
    }

    const seenIds = new Set<string>();
    return tripNodes.filter((node, index) => {
      if (!isValidTimelineNode(node, index)) {
        return false;
      }
      if (seenIds.has(node.id)) {
        warn(`Duplicate node id "${node.id}" found at index ${index} and was skipped.`);
        return false;
      }
      seenIds.add(node.id);
      return true;
    });
  }, [tripNodes]);
}

/**
 * Returns the status-specific indicator classes for a timeline node.
 */
function getNodeIndicatorClasses(status: TimelineNodeStatus): string {
  const statusStyles: Record<TimelineNodeStatus, string> = {
    completed: 'bg-[#006064] shadow-[0_0_0_2px_#006064]',
    delayed: 'bg-[#bf360c] shadow-[0_0_0_2px_#bf360c]',
    future: 'bg-[#cfd8dc] shadow-[0_0_0_1px_#cfd8dc]',
  };
  return `absolute -left-6 top-1 w-4 h-4 rounded-full border-[3px] border-white ${statusStyles[status]}`;
}

/**
 * Returns the time text classes based on the node status.
 */
function getTimeClasses(status: TimelineNodeStatus): string {
  return status === 'delayed'
    ? 'text-sm font-medium text-[#bf360c] font-bold'
    : 'text-sm font-medium text-slate-600';
}

/**
 * Badge shown for completed timeline nodes.
 */
function CompletedBadge() {
  return (
    <div className="flex items-center gap-1.5 text-sm text-[#006064] font-semibold">
      <Check className="w-3.5 h-3.5" />
      <span>Completed</span>
    </div>
  );
}

/**
 * Warning callout rendered when a node carries a warning object.
 */
function WarningBox({ warning }: { warning: TimelineWarning }) {
  return (
    <div className="mt-3 bg-[#bf360c] rounded-md p-4 text-white">
      <div className="flex items-start gap-2">
        <Zap className="w-4 h-4 mt-0.5 shrink-0" fill="white" />
        <div>
          <div className="text-sm font-semibold">{warning.title}</div>
          <div className="text-xs opacity-90 mt-1">{warning.description}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Options menu button displayed in the card header.
 */
function TimelineMenuButton() {
  return (
    <button
      type="button"
      aria-label="Trip options"
      className="text-slate-600 hover:text-slate-800"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 5C10 5.5 10.5 6 11 6C11.5 6 12 5.5 12 5C12 4.5 11.5 4 11 4C10.5 4 10 4.5 10 5M10 10C10 10.5 10.5 11 11 11C11.5 11 12 10.5 12 10C12 9.5 11.5 9 11 9C10.5 9 10 9.5 10 10M10 15C10 15.5 10.5 16 11 16C11.5 16 12 15.5 12 15C12 14.5 11.5 14 11 14C10.5 14 10 14.5 10 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export function TripTimeline({ tripNodes = DEFAULT_TRIP_NODES }: TripTimelineProps) {
  const validatedNodes = useValidatedTripNodes(tripNodes);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-[380px] shrink-0">
      {/* Header section with title and options menu */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-slate-600">Current Trip</h2>
        <TimelineMenuButton />
      </div>

      {/* Timeline section with vertical connector and node items */}
      <div className="relative pl-6">
        {/* Vertical connecting line running through all nodes */}
        <div className="absolute left-[7px] top-2 bottom-4 w-0.5 bg-gray-300" />
        {/* Highlighted segment indicating the delayed portion of the trip */}
        <div className="absolute left-[6px] top-[60px] w-1 h-[120px] bg-[#bf360c] rounded-full" />

        <div className="flex flex-col gap-12">
          {validatedNodes.map((tripNode) => (
            <div key={tripNode.id} className="relative">
              {/* Status-colored dot for this timeline node */}
              <div className={getNodeIndicatorClasses(tripNode.status)} />

              {/* Node content: time, title, subtitle, and status badge */}
              <div className="flex flex-col gap-1">
                <div className={getTimeClasses(tripNode.status)}>{tripNode.time}</div>
                <div className="text-lg font-bold text-slate-900">{tripNode.title}</div>
                {tripNode.subtitle && (
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    {tripNode.status === 'delayed' && (
                      <AlertTriangle className="w-3.5 h-3.5 text-[#bf360c]" />
                    )}
                    <span>{tripNode.subtitle}</span>
                  </div>
                )}
                {tripNode.status === 'completed' && <CompletedBadge />}
              </div>

              {/* Optional warning callout for critical issues */}
              {tripNode.warning && <WarningBox warning={tripNode.warning} />}
            </div>
          ))}
        </div>
      </div>

      {/* Live prediction footer */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
          Live Prediction
        </div>
        <p className="text-sm text-[#006064] leading-relaxed">
          Traffic on SV Road is heavier than usual. Recommended pace increased to{' '}
          <span className="font-bold">6km/h</span> to maintain connection.
        </p>
      </div>
    </div>
  );
}