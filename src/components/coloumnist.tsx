// components/Columnists.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';

interface Columnist {
  title: string;
  author: string;
  authorImage: string;
  authorSlug: string;
}

interface ColumnistsProps {
  columnists: Columnist[];
}

const Columnist: React.FC<ColumnistsProps> = ({ columnists }) => {
  return (
    <div className="columnists-section">
      <h2 className="columnists-heading">Columnists</h2>
      
      {columnists.map((columnist, index) => (
        <div key={index} className="columnist-item">
          <h3 className="columnist-title">
            <Link href={`/article/${columnist.authorSlug}`}>
              {columnist.title}
            </Link>
          </h3>
          
          <div className="columnist-byline">
            <div className="columnist-image">
              <img 
                src={columnist.authorImage} 
                alt={columnist.author}
                className="rounded-circle" 
              />
            </div>
            
            <div className="columnist-author">
              By <Link href={`/author/${columnist.authorSlug}`} className="author-link">
                {columnist.author}
              </Link>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
          
          {index < columnists.length - 1 && <hr className="columnist-divider" />}
        </div>
      ))}
    </div>
  );
};

export default Columnist;