import ReactPaginate from 'react-paginate';
import SearchFilter from '../components/SearchFilter';
import TabsHeader from '../components/TabsHeader';
import { SetStateAction, useState } from 'react';
import { posts } from '../../../utils/DummyData';
import PostsTable from '../components/PostsTable';
import Button from './Button';

interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PaginatedPostsTable = ({ activeTab, tabs, setActiveTab }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageChange = (selectedItem: {
    selected: SetStateAction<number>;
  }) => {
    setCurrentPage(selectedItem.selected);
  };

  const start = currentPage * itemsPerPage;
  const currentItems = posts.slice(start, start + itemsPerPage);

  return (
    <section>
      <TabsHeader
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className='p-6'>
        {' '}
        <section className='flex flex-wrap sm:flex-row flex-col sm:items-center justify-between gap-6'>
          <SearchFilter className='flex-1' />
          <div className='flex flex-wrap items-center gap-6'>
            <ReactPaginate
              pageCount={Math.ceil(posts.length / itemsPerPage)}
              onPageChange={handlePageChange}
              containerClassName='pagination'
              pageClassName='page'
              activeClassName='active'
              previousClassName='prev'
              nextClassName='next'
              disabledClassName='disabled'
              breakClassName='break'
              previousLabel='<'
              nextLabel='>'
            />
            <Button
              type='button'
              bg='green'
              className='h-[66px] w-[199px] rounded-[5px] font-semibold'
            >
              <span className=''> + </span>Add {activeTab}
            </Button>
          </div>
        </section>
        <section>
          <PostsTable num={8} posts={currentItems} />
        </section>
      </div>
    </section>
  );
};

export default PaginatedPostsTable;
