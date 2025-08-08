'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from '@/components/lib/animation-variants';

type Session = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string[];
  description: string;
  images: string[];
  isNew: boolean;
};

interface SessionCardProps {
  session: Session;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Hands-On':
      return 'bg-orange-500/80 hover:bg-orange-600/80 text-white border-orange-400/50';
    case 'Theory':
      return 'bg-blue-500/80 hover:bg-blue-600/80 text-white border-blue-400/50';
    case 'Networking':
      return 'bg-green-500/80 hover:bg-green-600/80 text-white border-green-400/50';
    default:
      return 'bg-gray-500/80 hover:bg-gray-600/80 text-white border-gray-400/50';
  }
};

export function SessionCard({ session }: SessionCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] overflow-hidden"
      variants={itemVariants}
      layout
    >
      {session.images && session.images.length > 0 && session.images[0] && (
        <div className="grid grid-cols-2 gap-2 p-6 pb-0">
          {session.images.map((image, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-2 border border-white/10"
            >
              <Image
                src={image || '/placeholder.svg?height=128&width=200'}
                alt={`${session.title} 활동 사진 ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-white">{session.title}</h3>
              {session.isNew && (
                <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg animate-pulse">
                  NEW
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {session.type.map((t) => (
                <Badge
                  key={t}
                  className={`${getTypeColor(t)} backdrop-blur-sm`}
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-6 whitespace-pre-line leading-relaxed">
          {session.description}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm border-t border-white/10 pt-4">
          <div className="flex items-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2 text-orange-400" />
            <span className="text-gray-300">
              {new Date(session.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'short',
              })}
            </span>
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="h-4 w-4 mr-2 text-orange-400" />
            <span className="text-gray-300">{session.time}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2 text-orange-400" />
            <span className="text-gray-300">{session.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
