'use client';

import { motion } from 'framer-motion';
import { itemVariants } from '@/components/lib/animation-variants';

interface FeatureCardProps {
  icon?: React.ReactNode; // icon을 선택적으로 변경
  title: string;
  children?: React.ReactNode;
  description?: string;
  className?: string;
  textAlign?: 'left' | 'center';
}

export const FeatureCard = ({
  icon,
  title,
  children,
  description,
  className = '',
  textAlign = 'left',
}: FeatureCardProps) => {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 ${textAlign === 'center' ? 'text-center' : 'text-left'} ${className}`}
      variants={itemVariants}
    >
      {textAlign === 'center' ? (
        <>
          {icon && (
            <div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <div className="text-gray-400 text-sm leading-relaxed">
            {description || children}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4 mb-3">
            {icon && (
              <div className="flex items-center justify-center">{icon}</div>
            )}
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <div className="text-gray-400 text-sm leading-relaxed">
            {children || description}
          </div>
        </>
      )}
    </motion.div>
  );
};
