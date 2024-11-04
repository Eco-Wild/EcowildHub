const team = [
  {
    name: 'Khan Rugira',
    image: '/Khan.jpg',
    role: 'Chief Executive Officer',
  },
  {
    name: 'Nkechi Udenkwor',
    image: '/Nkechi.jpg',
    role: 'Front-end',
  },
  {
    name: 'Anna Matsane',
    image: '/Anna.jpg',
    role: 'Graphic Designer',
  },
  {
    name: 'Kingsley Iwuchukwu',
    image: '/Kingsley.jpg',
    role: 'Froent-end Developer',
  },
  {
    name: 'Romha Keneni',
    image: '/Romha.jpg',
    role: 'Devops',
  },
  {
    name: 'Ange Constance',
    image: '/Ange.jpg',
    role: 'UI/UX Designer',
  },
  {
    name: 'Remy Ikuzwe',
    image: '/Remy.jpg',
    role: 'Content Creator',
  },
];

const Team = () => {
  return (
    <section className='container mx-auto max-w-[1728px] py-16'>
      <div className='flex flex-col items-center mb-10'>
        <span
          className='block w-20 h-[3px] bg-secondary-100 mb-3'
          aria-label='A yellow line'
        ></span>
        <h3 className='font-bold font-REM text-[32px]'>OUR TEAM</h3>
      </div>
      <div className='sm:grid grid-cols-[repeat(auto-fit,minmax(313px,1fr))] gap-6'>
        {team.map((member, index) => (
          <div key={index} className='hover:shadow-sm mb-8 md:mb-0'>
            <img
              src={member.image}
              alt={member.name}
              className='w-full h-auto object-cover'
            />
            <div className='p-6 border border-gray-200 border-t-0'>
              <h4 className='font-medium text-xl py-3'>{member.name}</h4>
              <span className='text-xl opacity-40'>{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
