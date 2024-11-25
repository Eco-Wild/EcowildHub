const reviews = [
  {
    name: 'Karangwa Innocent',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: '/customer-avatar.svg',
    id: crypto.randomUUID(),
  },

  {
    name: 'Karangwa Innocent',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: '/customer-avatar.svg',
    id: crypto.randomUUID(),
  },

  {
    name: 'Karangwa Innocent',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: '/customer-avatar.svg',
    id: crypto.randomUUID(),
  },
];

const CustomerReviews = () => {
  return (
    <section className='py-16 bg-cream-100'>
      <div className='flex flex-col items-center container mx-auto max-w-6xl text-tertiary-600 text-center'>
        <span
          className='block w-20 h-[3px] bg-secondary-100 mb-3'
          aria-label='A yellow line'
        ></span>
        <h3 className='font-bold font-REM text-[32px] mb-5 max-w-sm'>
          WHAT ARE THEY SAYING?
        </h3>
        <div className='sm:grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6'>
          {reviews.map((review) => (
            <div
              key={review.id}
              className='flex flex-col items-center  bg-white p-8 mb-8 sm:mb-0'
            >
              <img
                loading='lazy'
                src='/customer-avatar.svg'
                alt='An avatar'
                className=''
              />
              <p className='py-5 opacity-60'>{review.text}</p>
              <h6 className='font-extrabold py-2'>{review.name}</h6>
              <span className=''>Customer</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
