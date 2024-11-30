import { Icon } from '@iconify/react/dist/iconify.js';
import { range } from '../../../utils/HelperFunctions';
import { posts } from '../../../utils/DummyData';
import { Fragment, useState } from 'react';
import PostDescription from './PostDescription';

const PostsDetailsTable = ({ num }: { num: number }) => {
  const [showDescription, setShowDescription] = useState(false);
  console.log({ showDescription });
  return (
    <section className='overflow-auto text-tertiary-600'>
      {range(num).map((num) => (
        <div key={num} className='flex py-2'>
          {posts.map((post, index) => (
            <Fragment key={index}>
              <div className='flex-shrink-0 grow flex justify-between items-center gap-5 h-[92px] px-4  bg-white rounded-lg'>
                <div className='flex items-center gap-4'>
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className='w-9 h-9 object-cover  rounded-full'
                  />
                  <p className='font-medium text-sm'>{post.title}</p>
                </div>
                <p className='text-[13px]'>
                  <span className='opacity-50'>Date:</span>{' '}
                  <span className='text-[#1D1E21]'>{post.date}</span>
                </p>
                <p className='text-[13px]'>
                  <span className='opacity-50'>Author:</span>{' '}
                  <span className='text-[#1D1E21]'>{post.author}</span>
                </p>

                <div className='flex gap-4'>
                  <button
                    type='button'
                    className='font-bold text-xs border border-tertiary-400 rounded-full py-[7px] px-3'
                    onClick={() => setShowDescription(true)}
                  >
                    View
                  </button>
                  <button type='button' className=''>
                    <Icon icon='mage:edit' className='w-6 h-6' />
                  </button>
                  <button type='button' className=''>
                    <Icon
                      icon='material-symbols:bookmark-add-outline-rounded'
                      className='w-6 h-6'
                    />
                  </button>
                  <button type='button' className=''>
                    <Icon
                      icon='hugeicons:delete-01'
                      className='w-6 h-6 text-[#A15151]'
                    />
                  </button>
                </div>
              </div>
              {showDescription && (
                <PostDescription
                  post={post}
                  isOpen={showDescription}
                  setIsOpen={setShowDescription}
                />
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default PostsDetailsTable;
