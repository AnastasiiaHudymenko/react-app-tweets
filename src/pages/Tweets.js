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
    } catch (e) {
      setError(e.message);
    } finally {
      setLoadMore(false);
    }
  };

  const updateUserFollowers = async (id, followers, isFollowing) => {
    let body;
    !isFollowing
      ? (body = { followers: followers + 1 })
      : (body = { followers: followers - 1 });

    try {
      await updateUser({ id, body });
    } catch (e) {
      console.log(e);
    }

    const updateFollowers = users.map(user => {
      return user.id === id ? { ...user, ...body } : user;
    });
    setUsers(updateFollowers);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const res = await fetchUsers();
        setUsers(res);
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
