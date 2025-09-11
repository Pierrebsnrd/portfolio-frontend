'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'bars';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'default', 
  className,
  text,
  fullScreen = false
}: LoadingSpinnerProps) => {
  
  // Tailles pour chaque variante
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  // Composant Spinner classique
  const DefaultSpinner = () => (
    <div className={cn(
      "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400",
      sizeClasses[size]
    )} />
  );

  // Composant Dots (3 points qui bougent)
  const DotsSpinner = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce",
            size === 'sm' ? 'w-1 h-1' :
            size === 'md' ? 'w-2 h-2' :
            size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.8s'
          }}
        />
      ))}
    </div>
  );

  // Composant Pulse (cercle qui pulse)
  const PulseSpinner = () => (
    <div className="relative flex items-center justify-center">
      <div className={cn(
        "animate-ping absolute rounded-full bg-blue-400 opacity-75",
        sizeClasses[size]
      )} />
      <div className={cn(
        "relative rounded-full bg-blue-600 dark:bg-blue-400",
        size === 'sm' ? 'w-3 h-3' :
        size === 'md' ? 'w-6 h-6' :
        size === 'lg' ? 'w-9 h-9' : 'w-12 h-12'
      )} />
    </div>
  );

  // Composant Bars (barres qui montent et descendent)
  const BarsSpinner = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            "bg-blue-600 dark:bg-blue-400 animate-pulse",
            size === 'sm' ? 'w-0.5 h-2' :
            size === 'md' ? 'w-1 h-4' :
            size === 'lg' ? 'w-1.5 h-6' : 'w-2 h-8'
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1.2s'
          }}
        />
      ))}
    </div>
  );

  // Sélection du spinner selon la variante
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return <DotsSpinner />;
      case 'pulse':
        return <PulseSpinner />;
      case 'bars':
        return <BarsSpinner />;
      default:
        return <DefaultSpinner />;
    }
  };

  // Contenu du spinner avec texte optionnel
  const content = (
    <div className={cn(
      "flex flex-col items-center justify-center gap-3",
      className
    )}>
      {renderSpinner()}
      {text && (
        <p className={cn(
          "text-gray-600 dark:text-gray-400 font-medium animate-pulse",
          textSizes[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );

  // Version plein écran
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;