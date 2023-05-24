import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ totalProgress }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress > totalProgress) {
        currentProgress = totalProgress;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [totalProgress]);

  return (
    
      <div className="w-full bg-gray-200 rounded">
        <div
          className="h-2 bg-blue-500 rounded transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    
  );
}

ProgressBar.propTypes = {
  totalProgress: PropTypes.number
};