
import React from 'react';
import { Letter } from '../types';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/solid';

interface LetterCardProps {
  letter: Letter;
}

const LetterCard: React.FC<LetterCardProps> = ({ letter }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold font-heading text-primary mb-2">{letter.title}</h3>
      <div className="flex items-center text-xs text-neutral mb-3 space-x-4">
        <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1 text-accent" />
            <span>{new Date(letter.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        {letter.author && (
            <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1 text-accent" />
                <span>{letter.author}</span>
            </div>
        )}
      </div>
      <p className="text-neutral-dark leading-relaxed whitespace-pre-line">{letter.content}</p>
    </div>
  );
};

export default LetterCard;
