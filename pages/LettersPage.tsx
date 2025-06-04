
import React from 'react';
import LetterCard from '../components/LetterCard';
import { Letter } from '../types';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';


interface LettersPageProps {
  letters: Letter[];
}

const LettersPage: React.FC<LettersPageProps> = ({ letters }) => {
  const sortedLetters = [...letters].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  
  return (
    <div className="py-12 bg-neutral-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold font-heading text-neutral-dark sm:text-5xl flex items-center justify-center">
            <ChatBubbleLeftEllipsisIcon className="h-10 w-10 text-secondary mr-3" />
            Announcements & Updates
          </h2>
          <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
            Stay informed with the latest news and letters from CELA EVENTS.
          </p>
        </div>

        {sortedLetters.length > 0 ? (
          <div className="space-y-8">
            {sortedLetters.map(letter => (
              <LetterCard key={letter.id} letter={letter} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
             <img src="https://picsum.photos/seed/noletters/300/200" alt="No announcements" className="mx-auto mb-4 rounded-lg opacity-75"/>
            <p className="text-xl text-neutral-dark font-semibold">No announcements yet.</p>
            <p className="text-neutral">Please check back later for updates from our team.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LettersPage;
