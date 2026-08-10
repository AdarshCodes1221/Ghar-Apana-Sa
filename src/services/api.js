/*
  Simple API service using fetch. Reads base URL from VITE_API_URL.
  Exports functions used by the frontend to get and manage properties and signup users.
*/
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getProperties() {
  try {
    const res = await fetch(`${API_BASE}/api/properties`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to fetch properties');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('getProperties fallback:', err.message);
    return null; // Caller should fallback to local data
  }
}

export async function signupUser(payload) {
  try {
    const res = await fetch(`${API_BASE}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || data.message || 'Signup failed');
    }
    return data;
  } catch (err) {
    throw err;
  }
}


// Additional methods for creating/updating properties (owner flows)
export async function createProperty(payload) {
  const res = await fetch(`${API_BASE}/api/properties`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create property');
  return res.json();
}

export async function updateProperty(id, payload) {
  const res = await fetch(`${API_BASE}/api/properties/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update property');
  return res.json();
}
