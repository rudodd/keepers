// Import library functionality
import * as React from 'react';

// Import components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Avatar } from '@mui/material';
import KeepersTable from './KeepersTable';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function TeamAccordion(props) {

  const  { team } = props;

  return (
    <div className="accordion-container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${team.name}-keepers`}
          id={`${team.name}-keepers`}
        >
          <Avatar alt={team.name} src={`/img/${team.name}.jpg`} sx={{ width: 56, height: 56, border: 'solid 1px #d3d3d3' }} />
          <h3>{team.name}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <KeepersTable players={team.players} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}