import { useParams } from 'react-router-dom';
import HeroSectionHalf from '../../components/HeroSectionHalf';
import { blogs } from '../../utils/DummyData';
import PostCommment from '../../components/PostCommment';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);

  return (
    <section>
      <HeroSectionHalf title='BLOG / BLOG DETAILS' />
      <section className=' bg-cream-100'>
        <div className='container mx-auto max-w-[1210px] py-28 text-tertiary-600'>
          <img
            loading='lazy'
            src={blog?.image}
            alt={blog?.image.split('.')[0].slice(1)}
            className='w-full sm:h-[568px]'
          />
          <h3 className='py-5 font-bold font-REM text-[32px]'>{blog?.title}</h3>
          <p className='opacity-60 leading-loose pb-6'>
            Mentin the extp et ex imper fauci lacus many of passages of lorem
            ipsum available alteration in some form. Donec scelerisque dolor id
            nunc dictum, interdum gravida. Ut a luctus elit. Donec ac pharetra
            nisl, vitae tempus dolor. Nulla risus erat, blandit ut cursus id,
            vestibulum ut massa. In ornare id libero vel placerat. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Donec nec ligula vel mauris sodales suscipit. Nunc
            tincidunt est et turpis porta, quis pretium metus dignissim. Ut et
            ex imperdiet, aliquam sapien et, blandit justo. Donec fringilla
            pulvinar urna eget ornare. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae. Duis laoreet mattis
            magna. Nunc quis pellentesque lorem. Curabitur convallis efficitur
            ligula, condimentum interdum nunc sodales nec. Fusce vel faucibus
            lacus. Nunc at turpis porta, suscipit ante at, commodo purus.
            Quisque sagittis imperdiet eros, pretium tempor sapien lacinia eget.
            Aliquam mollis cursus mauris, a vehicula elit vulputate nec. In sed
            lorem nulla. Ut bibendum, risus id scelerisque eleifend, mi risus
            pharetra nisl, venenatis vulputate eros ligula condimentum tortor.
          </p>
          <hr className='h-px text-gray-200 bg-tertiary-600 opacity-10 border-0' />
          <PostCommment />
        </div>
      </section>
    </section>
  );
};

export default BlogDetails;
