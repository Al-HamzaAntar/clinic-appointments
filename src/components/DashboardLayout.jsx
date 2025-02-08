// src/components/DashboardLayout.jsx
import React, { useContext, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function DashboardLayout() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // If no user is logged in, redirect to the sign‑in page
  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  if (!user) return null; // Or show a loading indicator

  // Render menu items based on the user's role
  const renderMenuItems = () => {
    switch (user.role) {
      case 'super':
        return (
          <>
            <li className="mb-4">
              <NavLink
                to="/dashboard/super"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/clinics"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Clinics
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/doctors"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Doctors
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/payments"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Payments
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Settings
              </NavLink>
            </li>
          </>
        );
      case 'sub':
        return (
          <>
            <li className="mb-4">
              <NavLink
                to="/dashboard/sub"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/doctors"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Doctors
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/secretaries"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Secretaries
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/payments"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Payments
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Settings
              </NavLink>
            </li>
          </>
        );
      case 'secretary':
        return (
          <>
            <li className="mb-4">
              <NavLink
                to="/dashboard/secretary"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/appointments"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Appointments
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  isActive ? 'text-primary font-semibold' : 'hover:text-primary'
                }
              >
                Settings
              </NavLink>
            </li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
            {renderMenuItems()}
            <li className="mt-8">
              <button onClick={logout} className="bg-primary text-white px-4 py-2 rounded hover:bg-[#117068]">
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
