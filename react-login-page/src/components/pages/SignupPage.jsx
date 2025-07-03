import AuthForm from '../AuthForm/AuthForm';
import React from 'react';

export default function SignupPage() {
  return (
    <div className="w-[360px] md:w-[400px] backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg text-white">
      <AuthForm mode="signup" />
    </div>
  );
}
