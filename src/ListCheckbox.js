import './List.js';
import { useState } from 'react';

export default function ComponentCheckbox() {
  const [guestAccepted, setGuestAccepted] = useState(false);

  return (
    <form onSubmit={(event) => event.preventDefault}>
      <label>
        <input
          aria-label={`Attending ${
            guestAccepted ? 'Attending' : 'Not attending'
          } attending status`}
          type="checkbox"
          checked={guestAccepted}
          onChange={(event) => {
            setGuestAccepted(event.currentTarget.checked);
          }}
        />
        {guestAccepted ? 'Attending' : 'Not attending'}
      </label>
    </form>
  );
}
