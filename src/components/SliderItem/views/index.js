import React, { useState } from 'react';
import './SliderItem.sass';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { CircularProgress } from '@mui/material';

export default function SliderItem({ id, src, title, description }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className='SliderItem'
      onClick={() => {
        return navigate(`/events/${id}`);
      }}
    >
      <LazyLoad offset={300} height={300}>
        <div className='event-image'>
          <img
            src={src}
            alt={`Event ${id}`}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <CircularProgress
              sx={{ color: '#12dc9f', position: 'absolute' }}
              thickness={10}
              size={100}
            />
          )}
        </div>
      </LazyLoad>
      <div className='down-content'>
        <h3>{title}</h3>
        <p>{description.split('').splice(0, 100).join('') + '...'}</p>
      </div>
    </div>
  );
}
