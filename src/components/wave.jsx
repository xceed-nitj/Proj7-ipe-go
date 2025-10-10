// import React from "react";

function PinkWaveBanner({
  height = "h-[160px]",
  className = "",
  flip = false,        // flip vertically to alternate between sections
  opacityBack = 0.35,  // back layer opacity
  opacityFront = 0.65, // front layer opacity
  animated = true,     // set false to freeze
  speed = 2,           // >1 = faster, <1 = slower (2 = 2x faster)
}) {
  const container = `relative w-full ${height} overflow-hidden ${className}`;
  const repeat = animated ? "indefinite" : 0;
  const dur = (base) => `${(base / Math.max(0.1, speed)).toFixed(2)}s`;

  return (
    <div className={container}>
      <svg
        className={`absolute inset-0 w-full h-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Enhanced gradients with hue shift and smoother shimmer */}
          <linearGradient id="gradBack" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4d9d" stopOpacity="0.9">
              <animate attributeName="stopColor" values="#ff4d9d;#ff66a8;#ff4d9d" dur={dur(20)} repeatCount={repeat} />
              <animate attributeName="offset" values="0%;12%;0%" dur={dur(18)} repeatCount={repeat} />
            </stop>
            <stop offset="100%" stopColor="#ffb3d6" stopOpacity="0.9">
              <animate attributeName="stopColor" values="#ffb3d6;#ffc2e0;#ffb3d6" dur={dur(20)} repeatCount={repeat} />
              <animate attributeName="offset" values="100%;88%;100%" dur={dur(18)} repeatCount={repeat} />
            </stop>
          </linearGradient>
          <linearGradient id="gradFront" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff2d86" stopOpacity="1">
              <animate attributeName="stopColor" values="#ff2d86;#ff4f9e;#ff2d86" dur={dur(16)} repeatCount={repeat} />
              <animate attributeName="offset" values="0%;18%;0%" dur={dur(14)} repeatCount={repeat} />
            </stop>
            <stop offset="100%" stopColor="#ff8fc7" stopOpacity="1">
              <animate attributeName="stopColor" values="#ff8fc7;#ffa8d0;#ff8fc7" dur={dur(16)} repeatCount={repeat} />
              <animate attributeName="offset" values="100%;82%;100%" dur={dur(14)} repeatCount={repeat} />
            </stop>
          </linearGradient>

          {/* Enhanced glow with slight pulse */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur">
              <animate attributeName="stdDeviation" values="4;6;4" dur={dur(10)} repeatCount={repeat} />
            </feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* BACK WAVE with smoother, more organic motion and slight scale pulse */}
        <path
          fill="url(#gradBack)"
          fillOpacity={opacityBack}
          filter="url(#glow)"
          d="M0,224 C 180,210 360,200 540,212 C 720,224 900,260 1080,248 C 1260,236 1350,220 1440,216 L1440,320 L0,320 Z"
        >
          <animate
            attributeName="d"
            dur={dur(16)}
            repeatCount={repeat}
            values="
              M0,224 C 180,210 360,200 540,212 C 720,224 900,260 1080,248 C 1260,236 1350,220 1440,216 L1440,320 L0,320 Z;
              M0,228 C 200,216 380,208 560,218 C 740,230 920,266 1100,254 C 1280,242 1360,226 1440,220 L1440,320 L0,320 Z;
              M0,226 C 160,214 340,204 520,216 C 700,226 880,262 1060,250 C 1240,238 1340,222 1440,218 L1440,320 L0,320 Z;
              M0,224 C 180,210 360,200 540,212 C 720,224 900,260 1080,248 C 1260,236 1350,220 1440,216 L1440,320 L0,320 Z
            "
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1,1;1.02,1.02;1,1"
            dur={dur(12)}
            repeatCount={repeat}
            additive="sum"
          />
        </path>

        {/* FRONT WAVE with smoother motion and subtle scale pulse */}
        <path
          fill="url(#gradFront)"
          fillOpacity={opacityFront}
          d="M0,240 C 200,230 400,260 600,250 C 800,240 1000,210 1200,220 C 1320,226 1380,236 1440,240 L1440,320 L0,320 Z"
        >
          <animate
            attributeName="d"
            dur={dur(12)}
            repeatCount={repeat}
            values="
              M0,240 C 200,230 400,260 600,250 C 800,240 1000,210 1200,220 C 1320,226 1380,236 1440,240 L1440,320 L0,320 Z;
              M0,244 C 220,234 420,264 620,256 C 820,244 1020,214 1220,226 C 1340,232 1390,240 1440,244 L1440,320 L0,320 Z;
              M0,242 C 180,232 380,262 580,252 C 780,242 980,212 1180,222 C 1300,228 1370,238 1440,242 L1440,320 L0,320 Z;
              M0,240 C 200,230 400,260 600,250 C 800,240 1000,210 1200,220 C 1320,226 1380,236 1440,240 L1440,320 L0,320 Z
            "
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1,1;1.015,1.015;1,1"
            dur={dur(8)}
            repeatCount={repeat}
            additive="sum"
          />
        </path>
      </svg>
    </div>
  );
}

export default PinkWaveBanner;
