import React from 'react'
import { HiPhone, HiMail } from 'react-icons/hi';

const EmployeeCard = ({ name, cell, email, position }) => (
    <div className='bg-white/10 backdrop-blur-sm border border-white/20 w-full p-4 lg:p-6 rounded-xl hover:bg-white/20 transition-all duration-300'>
      <div className="space-y-3">
        <div className="text-xs font-bold text-white/60 uppercase tracking-wide">
          {position}
        </div>

        <div className="text-lg font-semibold text-white">
          {name}
        </div>

        <div className="flex items-center gap-2 text-sm text-white/70">
          <HiMail className="w-4 h-4" />
          <span className="truncate">{email}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/70">
          <HiPhone className="w-4 h-4" />
          <span>{cell}</span>
        </div>
      </div>
    </div>
);

export default EmployeeCard