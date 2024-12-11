import React, { useEffect } from 'react';
import './Home.scss';
import ApodCardDashboard from '../../components/ApodCardDashboard/ApodCardDashboard';

export default function Home() {
  useEffect(() => {
  }, []);

  return (
    <div className="content">
      <ApodCardDashboard />
    </div>
  );
}
