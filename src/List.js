import './List.css';
import { Fragment, useState } from 'react';
import ListCheckbox from './ListCheckbox';

export default function List() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);
  const clearName = () => {
    setFirstName('');
    setLastName('');
  };
  return (
    <>
      <h1>Guessin' dem guests</h1>
      <form data-test-id="guest">
        <label>
          <b>First name:</b>
          <input
            placeholder="First name here*"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          <b>Last name:</b>
          <input
            placeholder="Last name here*"
            value={lastName}
            onChange={(event) => {
              setLastName(event.currentTarget.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setLastName(event.currentTarget.value);
                const newGuest = {
                  name: {
                    first: firstName,
                    last: lastName,
                  },
                };
                const newAttendees = [...guests, newGuest];
                setGuests(newAttendees);
                clearName();
              }
            }}
          />
        </label>
      </form>
      <button
        onClick={() => {
          const newGuest = {
            name: {
              first: firstName,
              last: lastName,
            },
          };
          const newAttendees = [...guests, newGuest];
          setGuests(newAttendees);
          clearName();
        }}
        disabled={!lastName}
      >
        Accept new guest
      </button>
      <br />
      {guests.map((guest) => {
        return (
          <Fragment key={`guest-name-${guest.id}`}>
            <br />
            <b>
              <span style={{ fontSize: 26 }}>
                {guest.name.first} {guest.name.last}
              </span>
              <ListCheckbox />
            </b>
            <button
              aria-label={`Remove ${guest.name.first} ${guest.name.last}`}
              onClick={() => {
                const newAttendees = [...guests];
                newAttendees.length = newAttendees.length - 1;
                setGuests(newAttendees);
              }}
            >
              Remove
            </button>
            <br />
          </Fragment>
        );
      })}
      <br />
    </>
  );
}
