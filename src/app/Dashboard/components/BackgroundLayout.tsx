const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex justify-center items-center bg-primary-400 h-screen xs:py-10 px-5 py-8 font-Lato'>
      <div className='h-full w-full max-w-[1026px] bg-[#449742] rounded-lg'>
        <div className='flex flex-col items-center justify-center h-full'>
          <img src='/logo-gray.svg' alt='Ecowild logo' className=' mb-4' />
          {children}
        </div>
      </div>
    </section>
  );
};

export default BackgroundLayout;
