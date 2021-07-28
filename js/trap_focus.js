setTimeout(() => {

  const focusableElementsSubmit = 'button';
  const focusableElementsAdd = 'button, input';
  const focusableElementsEdit = 'button, input';
  const focusableElementsRemove = 'button';
  const firstFocusableElementSubmit = dialogSubmit.querySelectorAll(focusableElementsSubmit)[0]; 
  const firstFocusableElementEdit = dialogEdit.querySelectorAll(focusableElementsEdit)[0]; 
  const firstFocusableElementAdd = dialogAdd.querySelectorAll(focusableElementsAdd)[0]; 
  const firstFocusableElementRemove = dialogRemove.querySelectorAll(focusableElementsRemove)[0]; 
  const focusableContentSubmit = dialogSubmit.querySelectorAll(focusableElementsSubmit);
  const focusableContentEdit = dialogEdit.querySelectorAll(focusableElementsEdit);
  const focusableContentAdd = dialogAdd.querySelectorAll(focusableElementsAdd);
  const focusableContentRemove = dialogRemove.querySelectorAll(focusableElementsRemove);
  const lastFocusableElementSubmit = focusableContentSubmit[focusableContentSubmit.length - 1]; 
  const lastFocusableElementEdit = focusableContentEdit[focusableContentEdit.length - 1]; 
  const lastFocusableElementAdd = focusableContentAdd[focusableContentAdd.length - 1]; 
  const lastFocusableElementRemove = focusableContentRemove[focusableContentRemove.length - 1]; 

  document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {

      switch (document.activeElement) {
        case firstFocusableElementEdit:
          lastFocusableElementEdit.focus();
          e.preventDefault();
          return;
        case firstFocusableElementAdd:
          lastFocusableElementAdd.focus();
          e.preventDefault();
          return;
        case firstFocusableElementRemove:
          lastFocusableElementRemove.focus();
          e.preventDefault();
          return;
        case firstFocusableElementSubmit:
          lastFocusableElementSubmit.focus();
          e.preventDefault();
      }
    } else {
      switch (document.activeElement) {
        case lastFocusableElementEdit:
          firstFocusableElementEdit.focus();
          e.preventDefault();
          return;
        case lastFocusableElementAdd:
          firstFocusableElementAdd.focus();
          e.preventDefault();
          return;
        case lastFocusableElementRemove:
          firstFocusableElementRemove.focus();
          e.preventDefault();
          return;
        case lastFocusableElementSubmit:
          firstFocusableElementSubmit.focus();
          e.preventDefault();
      }
    }
  });
}, 500)
