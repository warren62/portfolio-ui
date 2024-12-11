import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Spinner.scss';

export default function Spinner({ size = 55, show = false }) {
  if (!show) return null;
  return (

    <div>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />
      <FontAwesomeIcon icon="check-square" />
      Loading...
    </div>

  );
}
