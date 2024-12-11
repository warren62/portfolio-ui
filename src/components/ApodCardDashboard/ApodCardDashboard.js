import React, { useEffect, useState } from 'react';
import './ApodCardDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApods, fetchAppendApods } from '../../store/nasaSlice';
import CardDashboard from '../CardDashboard/CardDashboard';
import { Button } from '@mui/material';

export default function ApodCardDashboard() {
  const dispatch = useDispatch();
  const apods = useSelector(state => state.nasa.apods);
  const loading = useSelector(state => state.nasa.loading);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const start = new Date();
    start.setDate(start.getDate() - 30);
    setStartDate(start);
    dispatch(fetchApods({ start }));
  }, [dispatch]);

  const getApodsMore = () => {
    const ogStart = new Date(startDate);
    const newStart = new Date(startDate);
    newStart.setDate(newStart.getDate() - 30);
    setStartDate(newStart);

    const end = new Date(ogStart);
    dispatch(fetchAppendApods({ start: newStart, end }));
  };

  const apodCards = (apods || []).map(value => ({
    title: value.title,
    subTitle: value.copyright,
    description: value.explanation,
    url: value.hdurl ?? value.url,
    shareUrl: value.hdurl ?? value.url,
    type: value.media_type,
  }));

  return (
    <div>
      <button onClick={getApodsMore}>Add More!</button>
      <div className="center-button">
        <Button variant="outlined" onClick={() => {
          getApodsMore();
        }}>Get 10 More</Button>
      </div>
      <div><pre>{JSON.stringify(loading, null, 2) }</pre></div>
      <CardDashboard cards={apodCards} loading={loading} />
    </div>
  );
}
