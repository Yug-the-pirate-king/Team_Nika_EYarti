import React, { useState, useEffect } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, style, className, ...rest } = props;
  const [didError, setDidError] = useState(false);

  // Reset error state if the source URL changes
  useEffect(() => {
    setDidError(false);
  }, [src]);

  if (didError || !src) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-slate-100 border border-slate-200 rounded-lg overflow-hidden ${className ?? ''}`}
        style={{ minHeight: '40px', minWidth: '40px', ...style }}
      >
        <img 
          src={ERROR_IMG_SRC} 
          alt="Image unavailable" 
          className="w-1/2 h-1/2 opacity-50"
          {...rest} 
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setDidError(true)}
      {...rest}
    />
  );
}