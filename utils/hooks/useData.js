// import library functionality
import { useState, useEffect } from 'react';

// import custom functionality
import { empty } from '../helpers';

export function useData() {

  const [adpData, setADP] = useState(null);
  const [ecrData, setECR] = useState(null);

    // Fetch the current ADP for all players
  const fetchADP = () => {
    fetch('/api/adp-current')
      .then((res) => {
        res.json().then((data) => setADP(data.players));
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
    if (empty(adpData)) {
      fetchADP();
    }
    if (empty(ecrData)) {
      fetchECR();
    }
  }, []);

  return {
    adpData,
    ecrData
  }
}