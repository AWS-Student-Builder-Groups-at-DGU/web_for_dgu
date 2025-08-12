'use client';

import { useState, FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, PartyPopper, Loader2 } from 'lucide-react';

const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function RecruitmentStatus() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [error, setError] = useState<string | null>(null);

  const SCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('이메일을 입력해주세요.');
      setStatus('error');
      return;
    }

    if (!SCRIPT_URL) {
      console.error('Google Apps Script URL is not configured.');
      setError('시스템 설정 오류입니다. 관리자에게 문의해주세요.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setError('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full bg-green-500/10 border border-green-500/30 rounded-2xl p-8 transition-all duration-300 hover:bg-green-500/20 text-center flex flex-col items-center gap-4 hover:scale-105"
      >
        <PartyPopper className="w-10 h-10 text-green-400" />
        <h3 className="text-xl font-bold text-white">🎉 신청 완료 🎉</h3>
        <p className="text-gray-300">
          다음 모집이 시작되면 가장 먼저 이메일로 알려드릴게요.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105`}
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div>
          <h3 className="text-3xl font-bold text-white mt-3 mb-6">
            모집 알림 신청
          </h3>
          <div className="text-gray-400 text-l mb-2">
            <p>매 학기 시작 직전 신규 멤버를 모집합니다.</p>
            <p>다음 모집 알림을 받으시려면, 이메일을 남겨주세요.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center gap-3"
        >
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full h-12 pl-10 pr-4 py-3 rounded-lg bg-slate-900 border-slate-600 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-orange-500 focus:border-orange-500"
              aria-label="Email-Noti"
            />
          </div>
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full h-12 px-8 bg-orange-500 text-white font-bold rounded-lg
               cursor-pointer
               transition-all duration-300 ease-in-out
               hover:bg-orange-400 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20
               disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100"
          >
            {status === 'submitting' ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>신청 중...</span>
              </div>
            ) : (
              '신청'
            )}
          </Button>
        </form>
      </div>

      {status === 'error' && error && (
        <p className="text-red-400 text-sm mt-4 text-center">{error}</p>
      )}
    </motion.div>
  );
}
