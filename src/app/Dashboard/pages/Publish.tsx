import { useState } from 'react';
import PaginatedTable from '../components/PaginatedPostsTable';

const Publish = () => {
  const tabs = ['News', 'Blogs', 'Events'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <PaginatedTable
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
};

export default Publish;
