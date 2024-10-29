import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        placeholder="Appointment Title"
      />
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={e => setContact(e.target.value)}
        name="Contact Name"
      />
      <input
        type='date'
        value={date}
        min={getTodayString()}
        onChange={e => setDate(e.target.value)}
        required
        placeholder="Date"
      />
      <input
        type='time'
        value={time}
        onChange={e => setTime(e.target.value)}
        required
        placeholder="Time"
      />
      <input
        type='submit'
        value='Add Appointment'
      />
    </form>
  );
};
