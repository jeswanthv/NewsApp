import { useRouter } from 'next/router';
import React from 'react';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  console.log(articles);
  return (
    <div className='bg-gray-900 h-full'>
      <div className='container max-w-screen-xl mx-auto p-1'>
        <Navbar />
        <div className='max-w-screen-sm lg:max-w-screen-lg grid gap-10 m-5 mx-auto grid-cols-1 lg:grid-cols-2'>
          {articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </div>
      <div className='flex justify-between mx-auto w-full max-w-screen-sm pb-4 pt-2 px-4 '>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={
            pageNumber === 1
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-gray-200 cursor-pointer'
          }
        >
          Previous page
        </div>
        <div className='text-gray-200'>#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
          className={
            pageNumber === 5
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-gray-200 cursor-pointer'
          }
        >
          Next page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.page_id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `http://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
