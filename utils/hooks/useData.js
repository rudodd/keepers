// import library functionality
import { useState, useEffect } from 'react';

// import custom functionality
import { empty } from '../helpers';

export function useData() {

  const [currentData, setCurrentData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const [ecrData, setECR] = useState(null);

    // Fetch the current ADP for all players
  const fetchCurrent = () => {
    fetch('/api/adp-current')
      .then((res) => {
        res.json().then((data) => setCurrentData(data.players));
      })
  }

  // Fetch last year's ADP for all players
  const fetchPrevious = () => {
    fetch('/api/adp-previous')
      .then((res) => {
        res.json().then((data) => setPreviousData(data.players));
      })
  }

  // Fetch current ECR for all players
  const fetchECR = () => {
    fetch('/api/fp-ecr')
      .then((res) => {
        res.json().then((data) => setECR(data));
      })
  }

  useEffect(() => {
    if (empty(currentData)) {
      fetchCurrent();
    }
    if (empty(previousData)) {
      fetchPrevious();
    }
    if (empty(ecrData)) {
      fetchECR();
    }
  }, []);

  return {
    currentData,
    previousData,
    ecrData
  }
}