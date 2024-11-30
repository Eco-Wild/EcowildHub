import { useRef } from 'react';
import Modal from '../../../components/Modal';
import { Post } from '../../../utils/types';
import useOnclickOutside from '../../../hooks/useOnclickOutside';

interface Props {
  post: Post;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDescription = ({ post, isOpen, setIsOpen }: Props) => {
  const modalRef = useRef(null);
  useOnclickOutside({ isOpen, setIsOpen, modalRef });

  return (
    <Modal
      animation={{
        initial: { x: '-100%' },
        animate: { x: 0 },
        exit: { x: '100%' },
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className='bg-opacity-20'
    >
      <section
        className='max-w-[745px] max-h-[800px] p-5 font-Lato bg-white rounded-lg overflow-y-scroll no-scrollbar'
        ref={modalRef}
      >
        <div className=''>
          <img
            src={post.thumbnail}
            alt={post.title}
            className='w-full h-auto object-cover my-5'
          />
          <h2 className='my-3 font-semibold text-primary-400 text-xl'>
            {post.title}
          </h2>
          <p className='text-lg my-2'>
            <span className='opacity-50'>Date:</span>{' '}
            <span className='text-[#1D1E21]'>{post.date}</span>
          </p>
          <p className='text-lg my-2'>
            <span className='opacity-50'>Author:</span>{' '}
            <span className='text-[#1D1E21]'>{post.author}</span>
          </p>
          <p className='text-lg opacity-50 my-3'>{post.text}</p>
          <p className='text-lg opacity-50 my-3'>{post.text}</p>
        </div>
      </section>
    </Modal>
  );
};

export default PostDescription;
