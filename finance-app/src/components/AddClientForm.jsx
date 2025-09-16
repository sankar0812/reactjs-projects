// import { useState } from 'react';

// export default function AddClientForm({ onAdd }) {
//   const [form, setForm] = useState({
//     name: '', asal: '', vatti: '', email: '', phone: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const balance = parseFloat(form.asal) + parseFloat(form.vatti);
//     onAdd({ ...form, balance });
//     setForm({ name: '', asal: '', vatti: '', email: '', phone: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required />
//       <input name="asal" type="number" placeholder="ASAL" onChange={handleChange} value={form.asal} required />
//       <input name="vatti" type="number" placeholder="VATTI" onChange={handleChange} value={form.vatti} required />
//       <input name="email" placeholder="Email Address" onChange={handleChange} value={form.email} />
//       <input name="phone" placeholder="Phone Number" onChange={handleChange} value={form.phone} />
//       <button type="submit">Add Client</button>
//     </form>
//   );
// }


import { useState } from 'react';

export default function AddClientForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '', asal: '', vatti: '', email: '', phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = parseFloat(form.asal) + parseFloat(form.vatti);
    onAdd({ ...form, balance });
    setForm({ name: '', asal: '', vatti: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-client-form">
      <h2>Add New Client</h2>
      <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required />
      <input name="asal" type="number" placeholder="ASAL" onChange={handleChange} value={form.asal} required />
      <input name="vatti" type="number" placeholder="VATTI" onChange={handleChange} value={form.vatti} required />
      <input name="email" placeholder="Email Address" onChange={handleChange} value={form.email} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} value={form.phone} />
      <button type="submit">Add Client</button>
    </form>
  );
}
