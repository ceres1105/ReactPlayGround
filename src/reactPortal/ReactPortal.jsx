import React, { useCallback, useState } from 'react';
import NewWindow from './NewWindow';

function ReactPortal() {
  const [isOpen, setOpenState] = useState(false);
  const open = useCallback(() => setOpenState(true), [isOpen]);
  const close = useCallback(() => {
    setOpenState(false);
  }, [isOpen]);

  return (
    <div>
      <h1>Portals in React</h1>
      <button type="button" onClick={open}>
        Open
      </button>
      <button type="button" onClick={close}>
        Close
      </button>
      {isOpen && <NewWindow closeHandler={close} />}
    </div>
  );
}

export default ReactPortal;
