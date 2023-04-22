import { useEffect, useState } from 'react';
import { fetchUsers, updateUser } from 'services/api';
import { TweetsMain } from 'components/TweetsMain/TweetsMain';
import { Spinner } from 'components/Spinner/Spinner';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';

export const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);

  const handleLoadMore = async () => {
    try {
      setLoadMore(true);
      setPage(prev => prev + 1);
      const res = await fetchUsers(page);
      setUsers(prev => [...prev, ...res]);
      setLoadMore(false);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoadMore(false);
    }
  };

  const updateUserFollowers = async (id, followers, action) => {
    let body;
    if (!action) {
      body = { followers: followers + 1 };
    } else {
      body = { followers: followers - 1 };
    }
    await updateUser({ id, body });

    const updateFollowers = users.map(user => {
      if (user.id === id) {
        return { ...user, ...body };
      }
      return user;
    });
    setUsers(updateFollowers);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const res = await fetchUsers();
        setUsers(res);
        setIsloading(false);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <ErrorMsg errMsg={error} />
  ) : (
    <TweetsMain
      updateUserFollowers={updateUserFollowers}
      loaded={loadMore}
      getPage={handleLoadMore}
      users={users}
    />
  );
};
