import { posts } from '../../../utils/DummyData';
import CountCard from '../components/CountCard';
import PostsDetailsTable from '../components/PostsTable';
import UserInteractionChart from '../components/UserInteractionChart';

const Overview = () => {
  return (
    <section className='p-6'>
      <CountCard />
      <UserInteractionChart />
      <PostsDetailsTable num={5} posts={posts} />
    </section>
  );
};

export default Overview;
