// import library functionality
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

// import custom functionality
import { empty } from '../helpers';

export function usePlayers() {

  const [players, setPlayers] = useState(null);

  // Fetch player data from csv
  const fetchPlayers = async () => {
    try {
      const csvFilePath = '/players.csv'; 
      Papa.parse(csvFilePath, {
        download: true, // Required to fetch from a URL
        header: true,   // Set to true if your CSV has a header row
        dynamicTyping: true, // Automatically convert numbers and booleans
        complete: (results) => {
          setPlayers(results.data);
          if (results.errors.length) {
            console.warn("PapaParse Errors:", results.errors);
          }
        },
        error: (err, file) => {
          console.error("PapaParse Error:", err, file);
        }
      });
    } catch (err) {
      console.error("Fetch or parsing failed:", err);
    }
  };

  useEffect(() => {
    if (empty(players)) {
      fetchPlayers();
    }
  }, []);

  return players;
}