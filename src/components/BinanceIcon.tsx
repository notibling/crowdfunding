import React from 'react';

export function BinanceIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.624 13.9202l-4.624 4.624-4.624-4.624 4.624-4.624 4.624 4.624zm3.696-3.696l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696zm-12.016 0l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696zm8.32-8.32l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696zm0 16.64l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696z" />
    </svg>
  );
}
