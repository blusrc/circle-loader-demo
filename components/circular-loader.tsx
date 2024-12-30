import React from "react";

interface CircularLoaderProps {
  /** The percentage (0-100) */
  progress: number;
  /** The overall width and height of the SVG (defaults to 100px) */
  size?: number;
  /** The thickness of the circular stroke (defaults to 8) */
  strokeWidth?: number;
  /** The color of the progress stroke (defaults to blue-500) */
  strokeColor?: string;
  /** The color of the track (the background circle), defaults to gray-200 */
  trackColor?: string;
  /** Additional class names */
  className?: string;
}

const CircularLoader: React.FC<CircularLoaderProps> = ({
  progress,
  size = 100,
  strokeWidth = 8,
  strokeColor = "blue-500",
  trackColor = "gray-200",
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className={`inline-block ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Rotate circles so that 0% starts at the top (12 o'clock) */}
      <g style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}>
        {/* Track circle */}
        <circle
          className={`${trackColor}`}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        {/* Progress circle */}
        <circle
          className={`${strokeColor} transition-all duration-300 ease-in-out`}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
      </g>

      {/* Percentage text (not rotated) */}
      <text
        // className="font-semibold"
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        fill="currentColor"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CircularLoader;
