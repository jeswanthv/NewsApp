import React from 'react';
import { usePalette } from 'react-palette';

const Card = ({ article }) => {
  const { data } = usePalette(article.urlToImage);
  return (
    <div
      className='h-full rounded-md m-3'
      style={{
        backgroundColor: data.darkMuted,
        boxShadow: '5px 5px 20px black',
      }}
      onClick={() => (window.location.href = article.url)}
    >
      <img
        className='object-cover h-1/3 rounded-t-md w-full '
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%',
        }}
        src={article.urlToImage}
        alt='image'
      />
      <div className='content p-2'>
        <h1
          className='text-md p-1 md:text-xl md:p-4 text-gray-400'
          style={{ color: data.vibrant }}
        >
          {article.title}
        </h1>
        <p
          className='text-gray-200 md:pt-4 px-2'
          style={{ color: data.lightVibrant }}
        >
          {article.description}
          <a href={article.url} target='_blank' className='text-blue-500'>
            More...
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
