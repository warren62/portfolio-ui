import React from 'react';
import './ShareButton.scss';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';

export default function ShareButton({ url }) {
  const share = () => {
    if (navigator.share) {
      navigator.share({ url })
        .catch(err => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard');
      });
    }
  };
  return (
    <IconButton onClick={share}>
      <ShareIcon />
    </IconButton>
  );
}
