// API configuration and service
// Use environment variable or fallback to production API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.skipperx.io/api';
const GOOGLE_AUTH_URL = process.env.REACT_APP_GOOGLE_AUTH_URL || 'https://api.skipperx.io/api/auth/google';

// Export GOOGLE_AUTH_URL for use in components
export { GOOGLE_AUTH_URL };

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Helper function to set auth token
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Helper function to remove auth token
export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token && !options.skipAuth) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API calls
export const authAPI = {
  // Send OTP to email or phone
  sendOTP: async (identifier) => {
    return apiRequest('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify(identifier),
      skipAuth: true,
    });
  },

  // Resend OTP
  resendOTP: async (identifier) => {
    return apiRequest('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify(identifier),
      skipAuth: true,
    });
  },

  // Verify OTP
  verifyOTP: async (data) => {
    return apiRequest('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify(data),
      skipAuth: true,
    });
  },

  // Get current user
  getCurrentUser: async () => {
    return apiRequest('/auth/me', {
      method: 'GET',
    });
  },

  // Update profile
  updateProfile: async (profileData) => {
    return apiRequest('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },

  // Logout
  logout: async () => {
    return apiRequest('/auth/logout', {
      method: 'POST',
    });
  },

  // Google OAuth status
  getGoogleOAuthStatus: async () => {
    return apiRequest('/auth/google/status', {
      method: 'GET',
      skipAuth: true,
    });
  },
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!getAuthToken();
};

export default authAPI;
