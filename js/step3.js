function createRows() {
  const table = document.querySelector('table');
  const tbody = document.createElement('tbody');
  if (items) {
    items.forEach((item, index) => {
      const itemEl = document.createElement('tr');
      itemEl.id = 'tr_' + index;
      const itemPriceTd = document.createElement('td');
      const itemNameTd = document.createElement('td');
      const removeButtonTd = document.createElement('td');
      const editButtonTd = document.createElement('td');
      itemPriceTd.innerHTML = item.price;
      itemNameTd.innerHTML = item.name;
      removeButtonTd.innerHTML = createRemoveButton();
      editButtonTd.innerHTML = createEditButton();
      removeButtonTd.addEventListener('click', () => openModal('dialog-remove', 'removeButton', itemEl.id));
      editButtonTd.addEventListener('click', () => openModal('dialog-edit', 'editButton', itemEl.id));
      itemEl.appendChild(itemPriceTd);
      itemEl.appendChild(itemNameTd);
      itemEl.appendChild(removeButtonTd);
      itemEl.appendChild(editButtonTd);
      tbody.appendChild(itemEl);
    });
  }
  table.appendChild(tbody);
}

function removeRows() {
  const tbody = document.querySelector('tbody');
  document.querySelector('table').removeChild(tbody);

}

function createRemoveButton() {
  return `<button type="button" class="round-button" aria-label="delete item" aria-haspopup="true" id="removeButton">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="icon" aria-label="delete this item">

<path d="M472,83H351V60c0-33.084-26.916-60-60-60h-70c-33.084,0-60,26.916-60,60v23H40c-11.046,0-20,8.954-20,20s8.954,20,20,20
h20.712l24.374,315.987c0.007,0.092,0.015,0.185,0.023,0.278c1.816,19.924,10.954,38.326,25.73,51.816
C125.615,504.571,144.771,512,164.778,512h182.444c41.667,0,75.917-31.032,79.669-72.183
c1.003-11.001-7.101-20.731-18.101-21.734c-11.011-1.003-20.731,7.101-21.734,18.101C385.195,456.603,368.07,472,347.222,472
H164.778c-20.777,0-37.875-15.571-39.823-36.242L100.831,123h310.338l-17.082,221.462c-0.849,11.013,7.39,20.629,18.403,21.479
c0.524,0.04,1.043,0.06,1.56,0.06c10.347,0,19.11-7.974,19.919-18.463L451.288,123H472c11.046,0,20-8.954,20-20
S483.046,83,472,83z M311,83H201V60c0-11.028,8.972-20,20-20h70c11.028,0,20,8.972,20,20V83z"/>
  <path d="M165.127,163.019c-11.035,0.482-19.59,9.818-19.108,20.854l10,228.933c0.469,10.738,9.322,19.128,19.966,19.128
c0.294,0,0.591-0.006,0.888-0.02c11.035-0.482,19.59-9.818,19.108-20.854l-10-228.934
C185.499,171.092,176.145,162.523,165.127,163.019z"/>
  <path d="M326.019,182.127l-10,228.934c-0.482,11.035,8.073,20.372,19.108,20.854c0.297,0.013,0.593,0.02,0.888,0.02
c10.643,0,19.497-8.39,19.966-19.128l10-228.933c0.482-11.035-8.073-20.372-19.108-20.854
C335.856,162.527,326.501,171.092,326.019,182.127z"/>
  <path d="M236,183v228.933c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V183c0-11.046-8.954-20-20-20S236,171.954,236,183z"/>
</svg>


<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="icon icon-hover" aria-hidden="true" aria-label="delete this item">
<path fill="white" d="M472,83H351V60c0-33.084-26.916-60-60-60h-70c-33.084,0-60,26.916-60,60v23H40c-11.046,0-20,8.954-20,20s8.954,20,20,20
h20.712l24.374,315.987c0.007,0.092,0.015,0.185,0.023,0.278c1.816,19.924,10.954,38.326,25.73,51.816
C125.615,504.571,144.771,512,164.778,512h182.444c41.667,0,75.917-31.032,79.669-72.183
c1.003-11.001-7.101-20.731-18.101-21.734c-11.011-1.003-20.731,7.101-21.734,18.101C385.195,456.603,368.07,472,347.222,472
H164.778c-20.777,0-37.875-15.571-39.823-36.242L100.831,123h310.338l-17.082,221.462c-0.849,11.013,7.39,20.629,18.403,21.479
c0.524,0.04,1.043,0.06,1.56,0.06c10.347,0,19.11-7.974,19.919-18.463L451.288,123H472c11.046,0,20-8.954,20-20
S483.046,83,472,83z M311,83H201V60c0-11.028,8.972-20,20-20h70c11.028,0,20,8.972,20,20V83z"/>
  <path fill="white" d="M165.127,163.019c-11.035,0.482-19.59,9.818-19.108,20.854l10,228.933c0.469,10.738,9.322,19.128,19.966,19.128
c0.294,0,0.591-0.006,0.888-0.02c11.035-0.482,19.59-9.818,19.108-20.854l-10-228.934
C185.499,171.092,176.145,162.523,165.127,163.019z"/>
  <path fill="white" d="M326.019,182.127l-10,228.934c-0.482,11.035,8.073,20.372,19.108,20.854c0.297,0.013,0.593,0.02,0.888,0.02
c10.643,0,19.497-8.39,19.966-19.128l10-228.933c0.482-11.035-8.073-20.372-19.108-20.854
C335.856,162.527,326.501,171.092,326.019,182.127z"/>
  <path fill="white" d="M236,183v228.933c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V183c0-11.046-8.954-20-20-20S236,171.954,236,183z"/>
</svg>
    </button>`
}

function createEditButton() {
  return `<button type="button" class="round-button" aria-label="edit item" aria-haspopup="true" id="editButton">
      <svg height="401pt" viewBox="0 -1 401.52289 401" width="401pt" xmlns="http://www.w3.org/2000/svg" class="icon"
           aria-label="edit this icon">
        <path
          d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/>
        <path
          d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/>
      </svg>
      <svg height="401pt" viewBox="0 -1 401.52289 401" width="401pt" xmlns="http://www.w3.org/2000/svg" class="icon icon-hover" aria-hidden="true"
           aria-label="edit this icon">
        <path fill="white"
          d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/>
        <path fill="white"
          d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/>
      </svg>
    </button>`
}

function toggleMenu() {
  openMenuSwitch = !openMenuSwitch;
  if (openMenuSwitch) {
    document.getElementById('menu-list').classList.add('show');
  } else {
    document.getElementById('menu-list').classList.remove('show');
  }
}

function addListenerOnEscButton() {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
      dialogSubmit.style.display = "none";
      dialogEdit.style.display = "none";
      dialogAdd.style.display = "none";
      dialogRemove.style.display = "none";
    }
  })
}

function goToStep2(e) {
  if (e && e.keyCode === 13) {
    dialogSubmit.removeEventListener('mousedown', onClose);
    window.location = './step2.html';
  } else if (!e) {
    dialogSubmit.removeEventListener('mousedown', onClose);
    window.location = './step2.html';
  }
}

function goToStep1(e) {
  if (e && e.keyCode === 13) {
    dialogSubmit.removeEventListener('mousedown', onClose);
    window.location = './claim-report.html';
  } else if (!e) {
    dialogSubmit.removeEventListener('mousedown', onClose);
    window.location = './claim-report.html';
  }

}

function goToStep3(e) {
  if (e && e.keyCode === 13) {
    window.location = './step3.html';
  } else if (!e) {
    window.location = './step3.html';
  }
}


