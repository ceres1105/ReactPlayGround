import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

function NewWindow({ closeHandler }) {
  const newWindow = useMemo(() =>
    window.open(
      'about:blank',
      'newWin',
      `width=400,height=300,left=${window.screen.availWidth / 2 - 200},top=${window.screen.availHeight / 2 - 150}`,
    ),
  );
  newWindow.onbeforeunload = () => {
    newWindow.close();
    // closeHandler();
  };
  const Component = <div>안녕 클레오 파트라</div>;
  useEffect(() => () => newWindow.close());
  return createPortal(Component, newWindow.document.body);
}

export default NewWindow;
