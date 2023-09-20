/*  component that renders a button that opens a popup 
modal for scheduling a meeting using Calendly */

import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';

const calendly = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        {props.text} {props.style}
      </button>
      <PopupModal
        url="https://calendly.com/digitakalagency/meeting-tasks-update"
        rootElement={document.getElementById('root')}
        pageSettings={props.pageSettings}
        utm={props.utm}
        prefill={props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
      />
    </div>
  );
};

export default calendly;
