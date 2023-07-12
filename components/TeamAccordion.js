// Import library functionality
import React, { useEffect, useState } from 'react';

// Import components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Avatar } from '@mui/material';
import KeepersPlayers from './KeepersPlayers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function TeamAccordion(props) {

  const  { team, expanded } = props;
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    setIsExpanded(expanded)
  }, [expanded])

  return (
    <div className="accordion-container">
      <Accordion expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${team.name}-keepers`}
          id={`${team.name}-keepers`}
        >
          <Avatar alt={team.name} src={`/img/${team.name}.jpg`} sx={{ width: 56, height: 56, border: 'solid 1px #d3d3d3' }} />
          <h3>{team.name}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <KeepersPlayers players={team.players} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}