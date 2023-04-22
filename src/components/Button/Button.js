export const Button = ({ getPage, loaded, users }) => {
  const handleClickLoadMore = () => {
    getPage();
  };
  return (
    <button
      style={{ display: users.length === 16 ? 'none' : 'block' }}
      onClick={handleClickLoadMore}
      type="button"
    >
      {loaded ? 'Loading...' : 'Load more'}
    </button>
  );
};
