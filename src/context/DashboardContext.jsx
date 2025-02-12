//     // src/context/DashboardContext.jsx
// import React, { createContext, useState } from 'react';

// export const DashboardContext = createContext();

// export const DashboardProvider = ({ children }) => {
//   // Initialize arrays for each type of data.
//   const [clinics, setClinics] = useState([]); // Clinics added from ClinicsManagement
//   const [doctors, setDoctors] = useState([]); // Doctors added from DoctorsManagement
//   const [payments, setPayments] = useState([]); // Payments data (could be added via PaymentsManagement)
//   const [appointments, setAppointments] = useState([]); // Appointments data (from BookingPage)

//   return (
//     <DashboardContext.Provider
//       value={{
//         clinics,
//         setClinics,
//         doctors,
//         setDoctors,
//         payments,
//         setPayments,
//         appointments,
//         setAppointments,
//       }}
//     >
//       {children}
//     </DashboardContext.Provider>
//   );
// };
