import CountCard from '../components/CountCard';
import PostsDetailsTable from '../components/PostsDetailsTable';
import UserInteractionChart from '../components/UserInteractionChart';

const Overview = () => {
  return (
    <section className='bg-[#D3D3D5] p-6'>
      <CountCard />
      <UserInteractionChart />
      <PostsDetailsTable num={5} />
    </section>
  );
};

export default Overview;
