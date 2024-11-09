import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { blogs } from '../utils/DummyData';

interface Props {
  bgColor?: string;
  numToShow?: number;
}

const Blog = ({ bgColor, numToShow = 3 }: Props) => {
  return (
    <section className='sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-14 w-full text-center'>
      {blogs.slice(0, numToShow).map((data) => (
        <div key={data.id} className='mb-7 md:mb-0'>
          <img
            loading='lazy'
            src={data.image}
            alt={data.image.split('.')[0].slice(1)}
            className='w-full sm:h-[404px] object-cover'
          />
          <div
            className='px-8 pt-12 pb-14 flex flex-col items-center relative'
            style={{ backgroundColor: bgColor || '' }}
          >
            <span className='flex'>
              <img
                loading='lazy'
                src='/calendar-green.svg'
                alt='A green calendar icon'
                className='mb-2 mr-1'
              />
              {data.date}
            </span>

            <h5 className='md:max-w-[394px] font-bold text-xl pt-3'>
              {data.title}
            </h5>
            <button
              type='button'
              className='absolute -bottom-7 bg-cream-200 border-[6px] border-white w-14 h-14 rounded-full'
            >
              <Link to={`/publish/blogs/${data.id}/blog-details`}>
                {' '}
                <Icon
                  icon='formkit:arrowright'
                  className='ml-[5px] text-white '
                />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blog;
