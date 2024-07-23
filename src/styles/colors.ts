const basic = {
  'basic-50': '#eff6ff',
  'basic-100': '#dbeafe',
  'basic-200': '#bfdbfe',
  'basic-300': '#93c5fd',
  'basic-400': '#60a5fa',
  'basic-500': '#3b82f6',
  'basic-600': '#2563eb',
  'basic-700': '#1d4ed8',
  'basic-800': '#1e40af',
  'basic-900': '#1e3a8a',
  'basic-950': '#172554',
};

const danger = {
  'danger-50': '#fef2f2',
  'danger-100': '#fee2e2',
  'danger-200': '#fecaca',
  'danger-300': '#fca5a5',
  'danger-400': '#f87171',
  'danger-500': '#ef4444',
  'danger-600': '#dc2626',
  'danger-700': '#b91c1c',
  'danger-800': '#991b1b',
  'danger-900': '#7f1d1d',
  'danger-950': '#450a0a',
};

const shadow = {
  'shadow-blue': '#2f95dc',
  'shadow-black': 'rgba(84, 84, 84,0.5)',
};

export const colors = {
  light: {
    ...basic,
    ...danger,
    ...shadow,
    'color-success-500': '#22c55e',
    'text-primary': '#2C2D2E',
    'text-secondary': '#919399',
    'text-placeholder': 'rgb(40, 40, 40)',
    'text-disabled': 'rgba(103, 103, 103, 0.5)',
    'tab-icon-default': 'rgb(204,204,204)',
    'bg-color-1': '#fff',
    'bg-color-2': 'rgb(230, 230, 230)',
    border: '#919399',
    tint: '#3b82f6',
    'button-general': 'black',
    'button-primary': '#6366F1',
    'button-secondary': '#92bafb',
    'button-text': 'rgb(209, 209, 209)',
    'button-disable': 'rgba(201, 201, 201, 0.5)',
    'navbar-bottom': 'rgb(216, 216, 216)',
  },
  dark: {
    ...basic,
    ...danger,
    ...shadow,
    'color-success-500': '#22c55e',
    'text-primary': 'rgb(222, 222, 222)',
    'text-secondary': 'rgb(162, 162, 162)',
    'text-placeholder': 'rgba(225, 225, 225, 0.5)',
    'text-disabled': 'rgba(106, 106, 106, 0.5)',
    'tab-icon-default': 'rgb(100, 160, 163)',
    'bg-color-1': '#000',
    'bg-color-2': 'rgb(40, 40, 40)',
    border: 'rgb(162, 162, 162)',
    tint: '#3b82f6',
    'button-general': 'white',
    'button-primary': '#6366F1',
    'button-secondary': '#2a7afa',
    'button-text': '#2C2D2E',
    'button-disable': 'rgba(58, 58, 58, 0.5)',
    'navbar-bottom': 'rgb(54, 54, 54)',
  },
};

export type ColorsType = typeof colors.light & typeof colors.dark;
