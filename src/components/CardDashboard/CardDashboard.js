import React, { useEffect, useState } from 'react';
import './CardDashboard.scss';
import Spinner from '../Spinner/Spinner';
import Grid from '@mui/material/Grid';
import CardImageViewer from '../CardImageViewer/CardImageViewer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CardDashboard({ cards = [], loading = false }) {
  const [cols, setCols] = useState(3);
  const isHandset = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (isHandset) {
      setCols(1);
    } else {
      setCols(3);
    }
  }, [isHandset]);

  return (
    <div className="grid-container">
      <Spinner show={loading} />
      {!loading && (
        // TODO: use Grid2
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12/cols} key={index} style={{ height: '400px' }}>
              <CardImageViewer cardModel={card} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
