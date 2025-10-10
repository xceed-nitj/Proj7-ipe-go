import { useState, useEffect } from 'react';

const countdownTargets = {
  submission: new Date('2025-09-10T23:59:59'),
  registration: new Date('2025-09-30T23:59:59'),
  conference: new Date('2025-11-07T09:00:00'),
  acceptance: new Date('2025-09-20T09:00:00'),
};

const getTimeLeft = (targetDate) => {
  const diff = +targetDate - +new Date();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
  };
};

const CountdownBox = ({ title, time, color }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="text-md font-semibold mb-3" style={{ color }}>{title}</div>
      <div className="flex gap-3">
        {['days', 'hours', 'minutes'].map((unit) => (
          <div
            key={unit}
            className="w-16 h-16 rounded-md border border-gray-300 flex flex-col items-center justify-center p-2 bg-gray-50"
          >
            <div className="text-2xl font-mono font-bold text-gray-800">
              {String(time[unit]).padStart(2, '0')}
            </div>
            <div className="text-[11px] text-gray-500 uppercase font-medium">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TripleCountdown = () => {
  const [times, setTimes] = useState({
    submission: getTimeLeft(countdownTargets.submission),
    registration: getTimeLeft(countdownTargets.registration),
    conference: getTimeLeft(countdownTargets.conference),
    acceptance: getTimeLeft(countdownTargets.acceptance),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes({
        submission: getTimeLeft(countdownTargets.submission),
        registration: getTimeLeft(countdownTargets.registration),
        conference: getTimeLeft(countdownTargets.conference),
        acceptance: getTimeLeft(countdownTargets.acceptance),
      });
    }, 60000); // every 60s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 text-black bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-5 w-full h-15">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <CountdownBox
          title="Abstract Submission"
          time={times.submission}
          color="#FF1493"
        />
        <CountdownBox
          title="Acceptance"
          time={times.acceptance}
          color="#800000"
        />
        <CountdownBox
          title="Registration"
          time={times.registration}
          color="#FF6F00"
        />
        <CountdownBox
          title="Conference"
          time={times.conference}
          color="#2E7D32"
        />
      </div>
    </div>
  );
};

export default TripleCountdown;
