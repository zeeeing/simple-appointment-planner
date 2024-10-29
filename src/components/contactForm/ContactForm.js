import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        required
        placeholder="Name"
      />
      <input
        type='tel'
        value={phone}
        onChange={e => setPhone(e.target.value)}
        pattern="^(6|8|9)\d{7}$"
        required
        placeholder="Phone Number"
      />
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Email"
      />
      <input
        type='submit'
        value='Add Contact'
      />
    </form>
  );
};
