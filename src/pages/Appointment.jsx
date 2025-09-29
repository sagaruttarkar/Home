import React from 'react';

function Appointment() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Book an Appointment</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Full Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="date" className="border p-2" />
        <select className="border p-2">
          <option>Select Service</option>
          <option>X-Ray</option>
          <option>MRI</option>
          <option>CT Scan</option>
          <option>Ultrasound</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
