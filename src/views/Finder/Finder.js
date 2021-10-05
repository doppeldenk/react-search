import React, { useCallback, useEffect, useState } from 'react';

import { Box, TextField, Typography } from '@mui/material';

import { getStarredCount, search, updateStarredState } from '../../services/finderService';

import DataCard from './components/DataCard';

import './Finder.scss';

export default function Finder() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [starred, setStarred] = useState(null);

  const fetchData = useCallback(async () => {
    const results = await search(q);
    setData(results);
  }, [q]);
  
  const toggleStarred = async (data, newState) => {
    await updateStarredState(data, newState);
    fetchData();
  };
  
  useEffect(() => {
    (async () => {
      const starredItems = await getStarredCount();
      setStarred(starredItems);
    })();
  }, [data]);
  
  useEffect(() => {
    if (q) {
      fetchData();
    }
  }, [fetchData, q]);

  return (
    <div className="finder">
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Typography sx={{ mb: 2 }}> We have {starred} item/s starred in our database</Typography>
        <TextField
          fullWidth 
          label="Find the stuff" 
          variant="outlined"
          onChange={e => setQ(e.target.value)}
          />
      </Box>
      <div className="results">
        { 
            data.map((row) => {
            return <DataCard key={row.id} data={row} toggleStarred={toggleStarred} />
          })
        }
      </div>
      {
        (q && !data.length) &&
        <Typography>
          No stuff has been found.
        </Typography>
      }
    </div>
  );
}
