import ReactPaginate from 'react-paginate';
import SearchFilter from '../components/SearchFilter';
import TabsHeader from '../components/TabsHeader';
import { SetStateAction, useState } from 'react';
import { posts } from '../../../utils/DummyData';
import PostsTable from '../components/PostsTable';
import Button from './Button';
import { Icon } from '@iconify/react/dist/iconify.js';
import PostsForm from './PostsForm';

interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PaginatedPostsTable = ({ activeTab, tabs, setActiveTab }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchValue, setSearchValue] = useState('');

  const itemsPerPage = 5;
  const start = currentPage * itemsPerPage;
  const filteredPosts = posts.filter((post) => {
    const matchesSearchValue =
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.author.toLowerCase().includes(searchValue.toLowerCase());
    const matchesDropdownFilter =
      selectedFilter.toLowerCase() === 'all' ||
      post.date === selectedFilter.toLowerCase() ||
      post.author === selectedFilter.toLowerCase();

    return matchesSearchValue && matchesDropdownFilter;
  });
  const currentItems = filteredPosts.slice(start, start + itemsPerPage);

  const openModal = () => setFormModalOpen(true);
  const closeModal = () => setFormModalOpen(false);

  const handlePageChange = (selectedItem: {
    selected: SetStateAction<number>;
  }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <section>
      <TabsHeader
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className='p-6'
      />
      <div className='p-6'>
        {' '}
        <section className='flex flex-wrap sm:flex-row flex-col sm:items-center justify-between gap-x-36 gap-y-6'>
          <SearchFilter
            className='grow'
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setSelectedFilter={setSelectedFilter}
          />
          <div className='grow flex items-center gap-6'>
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
              className='flex items-center justify-center gap-2 h-[66px] w-full max-w-[199px] rounded-[5px] font-semibold'
              onClick={openModal}
            >
              <Icon icon='mingcute:add-fill' className='' />
              Add {activeTab}
            </Button>
          </div>
        </section>
        <section>
          <PostsTable num={8} posts={currentItems} />
        </section>
      </div>
      {isFormModalOpen && <PostsForm title={activeTab} onClose={closeModal} />}
    </section>
  );
};

export default PaginatedPostsTable;
