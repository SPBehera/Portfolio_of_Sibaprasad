import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ReactIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 115.3 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(30 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(90 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(150 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
    <circle cx="57.65" cy="50" r="8" fill="#61DAFB" />
  </svg>
);

export const NextjsIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next-paint0)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#next-paint1)" />
    </g>
    <defs>
      <linearGradient id="next-paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next-paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="128" height="128" rx="16" fill="#3178C6" />
    <path d="M70.3 84.1c1.8 2.8 4.4 5 7.8 6.5 3.4 1.5 7.3 2.3 11.6 2.3 3.7 0 6.9-.6 9.5-1.7 2.6-1.1 4.7-2.7 6.1-4.7 1.5-2 2.2-4.4 2.2-7.1 0-2.3-.5-4.3-1.6-6-1.1-1.7-2.7-3.1-4.8-4.3-2.1-1.2-5-2.2-8.6-3.2-4.6-1.3-8.2-2.5-10.7-3.7-2.5-1.2-4.6-2.7-6.2-4.5-1.6-1.8-2.4-4.2-2.4-7.1 0-3.3 1-6.1 2.9-8.5 1.9-2.4 4.7-4.2 8.2-5.4 3.5-1.2 7.6-1.8 12.3-1.8 5.7 0 10.6 1.1 14.7 3.3 4.1 2.2 7 5.3 8.7 9.3l-10.7 6.6c-.9-2.2-2.3-3.8-4.2-4.9-1.9-1.1-4.4-1.7-7.4-1.7-3.1 0-5.7.5-7.7 1.6-2 1.1-3 2.7-3 4.8 0 1.9.8 3.5 2.3 4.7 1.5 1.2 4.1 2.3 7.8 3.3 5.3 1.5 9.4 3 12.2 4.5 2.8 1.5 5 3.3 6.6 5.6 1.6 2.3 2.4 5.2 2.4 8.7 0 3.7-1 6.9-3 9.6-2 2.7-4.9 4.8-8.7 6.2-3.8 1.4-8.3 2.1-13.6 2.1-6.9 0-12.7-1.4-17.4-4.2-4.7-2.8-7.9-6.9-9.7-12.2l11.4-6.4zm-48.4-36.9h39.4v10.5h-13.6v45.1H35.6V57.7H21.9V47.2z" fill="#FFFFFF" />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="128" height="128" rx="16" fill="#F7DF1E" />
    <path d="M26.4 89.2l11.4-6.8c2.2 3.8 4.9 6.6 8.9 6.6 4.4 0 7.2-1.8 7.2-8.7V39h13.9v41.3c0 6.6-1.9 11.6-5.5 14.8-3.6 3.2-8.8 4.9-15.3 4.9-8.4 0-15.4-4.5-20.6-10.8zm45.9-2.5l11.4-6.6c2.8 4.6 6.8 8.1 12.4 8.1 5.3 0 8.7-2.6 8.7-6.2 0-4.3-3.5-5.9-9.6-8.5l-3.3-1.4c-9.5-4-15.7-9.2-15.7-19.8 0-9.9 7.6-17.3 19.4-17.3 8.3 0 14.4 2.9 18.9 10.9l-10.7 6.8c-2.3-4.1-5-5.7-8.2-5.7-3.7 0-6.1 2.3-6.1 5.3 0 3.7 2.3 5.3 7.8 7.6l3.3 1.4c11.3 4.8 17.8 10 17.8 20.8 0 12-9.4 18.2-22.1 18.2-12.4 0-20.8-6.1-24-13.6z" fill="#000000" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
  </svg>
);

export const NodejsIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M64 12L18 38.5v53L64 118l46-26.5v-53L64 12z" fill="#5FA04E" />
    <path d="M64 24.5L28.8 45v40L64 105.5 99.2 85V45L64 24.5z" fill="#333333" />
    <path d="M64 42c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.8-22-22-22zm0 33.5c-6.4 0-11.5-5.1-11.5-11.5S57.6 52.5 64 52.5 75.5 57.6 75.5 64 70.4 75.5 64 75.5z" fill="#5FA04E" />
  </svg>
);

export const ExpressIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#18181B" />
    <text x="64" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="38" fontFamily="monospace" fontWeight="bold">ex</text>
  </svg>
);

export const HonoIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#E36002" />
    <path d="M64 25c0 20-18 28-18 42 0 12 8 22 18 22s18-10 18-22c0-14-18-22-18-42z" fill="#FFA500" />
    <path d="M64 52c0 10-9 14-9 21 0 6 4 11 9 11s9-5 9-11c0-7-9-11-9-21z" fill="#FFFFFF" />
  </svg>
);

export const MongoIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M64.6 15c-1.2 1.4-19.4 23.3-19.4 50.8 0 25.1 17.5 44.5 18.8 45.9 0 0-1.1-7.8-.5-13.8.6-6 4.3-14.8 4.3-14.8s3.4 9 3.8 15.3c.4 6.3-.5 13.3-.5 13.3 1.3-1.4 18.8-20.8 18.8-45.9C89.9 38.3 71.7 16.4 64.6 15z" fill="#47A248" />
    <path d="M64.6 15v98.7c0 0-.9-7.8-.5-13.8.5-5.9 4.3-14.8 4.3-14.8s3.4 9 3.8 15.3c.4 6.3-.5 13.3-.5 13.3 1.3-1.4 18.8-20.8 18.8-45.9C89.9 38.3 71.7 16.4 64.6 15z" fill="#499D4A" />
  </svg>
);

export const MysqlIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#00758F" />
    <path d="M42 75c-4-8-1-20 6-25s18-4 22 2c4 6 2 15-4 19-6 4-15 8-24 4z" fill="#F29111" />
    <path d="M55 45c8-1 16 3 20 10s3 16-2 22-12 9-18 6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <circle cx="48" cy="54" r="2.5" fill="#FFFFFF" />
  </svg>
);

export const FirebaseIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25.6 93.6L44.8 22.8c.7-2.6 4.3-3.1 5.7-.8l14.7 24.3-24.8 47.3h-14.8z" fill="#FFA000" />
    <path d="M82.2 43.1L65.2 74.4 50.5 46.3 35.8 74.4l46.4-31.3z" fill="#F57C00" />
    <path d="M25.6 93.6l37.8 21.3c1.7 1 3.8 1 5.5 0l33.5-19.1-37.2-21.4-39.6 19.2z" fill="#FFCA28" />
    <path d="M102.4 95.8L83.8 32.5c-.8-2.7-4.5-3.3-6.1-.9L25.6 93.6l76.8 2.2z" fill="#FF8F00" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#2496ED" />
    <rect x="36" y="52" width="10" height="9" rx="1.5" fill="#FFFFFF" />
    <rect x="48" y="52" width="10" height="9" rx="1.5" fill="#FFFFFF" />
    <rect x="60" y="52" width="10" height="9" rx="1.5" fill="#FFFFFF" />
    <rect x="48" y="41" width="10" height="9" rx="1.5" fill="#FFFFFF" />
    <rect x="60" y="41" width="10" height="9" rx="1.5" fill="#FFFFFF" />
    <rect x="72" y="52" width="10" height="9" rx="1.5" fill="#FFFFFF" />
    <path d="M28 66c0 0 5-3 15-3 5 0 25 1 35 12 15 0 25-10 26-11 0 0 2 12-7 19-12 9-27 8-40 4-13-4-23-14-29-21z" fill="#FFFFFF" />
    <circle cx="94" cy="68" r="2" fill="#2496ED" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#F05032" />
    <path d="M42 45a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm44 36a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-44-6v38m0-19c8 0 18-5 24-11l14-14m0-4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const PostmanIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#FF6C37" />
    <circle cx="64" cy="48" r="14" fill="#FFFFFF" />
    <path d="M40 76c0-12 11-20 24-20s24 8 24 20v6H40v-6z" fill="#FFFFFF" />
  </svg>
);

export const HtmlIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.2 113.8L9.6 6.4h108.8l-9.6 107.4L64 121.6l-44.8-7.8z" fill="#E44D26" />
    <path d="M64 113.1l36.5-6.4 8-89.9H64v96.3z" fill="#F16529" />
    <path d="M64 48.6H46.1l-1.3-14.7H64V20H28.8l3.8 42.6H64V48.6zm0 36.8l-.3.1-15.4-4.2-1-11.2H33.3l1.9 21.8L64 99.8v-14.4z" fill="#EBEBEB" />
    <path d="M63.9 62.6h17.9l-1.7 18.9-16.2 4.4V99.8l28.8-7.8 3.8-43.4H63.9v14zM63.9 20v13.9h35.2L100.3 20H63.9z" fill="#FFFFFF" />
  </svg>
);

export const CssIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.2 113.8L9.6 6.4h108.8l-9.6 107.4L64 121.6l-44.8-7.8z" fill="#1572B6" />
    <path d="M64 113.1l36.5-6.4 8-89.9H64v96.3z" fill="#33A9DC" />
    <path d="M64 48.6H46.1l-1.3-14.7H64V20H28.8l3.8 42.6H64V48.6zm0 36.8l-.3.1-15.4-4.2-1-11.2H33.3l1.9 21.8L64 99.8v-14.4z" fill="#EBEBEB" />
    <path d="M63.9 62.6h17.9l-1.7 18.9-16.2 4.4V99.8l28.8-7.8 3.8-43.4H63.9v14zM63.9 20v13.9h35.2L100.3 20H63.9z" fill="#FFFFFF" />
  </svg>
);

export const ZegoIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="64" cy="64" r="60" fill="#0055FF" />
    <path d="M38 48h34a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H38a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6z" fill="#FFFFFF" />
    <path d="M78 57l18-9v32l-18-9V57z" fill="#00D2FF" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2 22L7.09 20.67C8.54 21.52 10.22 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.06 16.32C16.85 16.92 15.93 17.43 15.28 17.57C14.84 17.67 14.26 17.75 12.33 16.95C9.86 15.93 8.27 13.41 8.15 13.25C8.03 13.09 7.15 11.92 7.15 10.71C7.15 9.5 7.76 8.91 8.01 8.66C8.22 8.45 8.57 8.35 8.87 8.35C8.97 8.35 9.06 8.35 9.14 8.36C9.37 8.37 9.49 8.38 9.64 8.74C9.83 9.19 10.29 10.31 10.35 10.43C10.41 10.55 10.47 10.71 10.39 10.87C10.31 11.03 10.24 11.11 10.12 11.25C10 11.39 9.89 11.49 9.77 11.63C9.64 11.77 9.5 11.92 9.65 12.18C9.8 12.44 10.32 13.29 11.08 13.97C12.06 14.84 12.86 15.12 13.14 15.24C13.38 15.34 13.66 15.32 13.84 15.13C14.07 14.88 14.35 14.48 14.64 14.07C14.85 13.78 15.11 13.74 15.38 13.84C15.66 13.94 17.13 14.66 17.43 14.81C17.73 14.96 17.93 15.04 18 15.16C18.07 15.28 18.07 15.82 17.06 16.32Z" fill="currentColor" />
  </svg>
);
