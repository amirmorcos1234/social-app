/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { CustomLoader } from '@components/atoms';
import { Post } from '@components/molecules';
import { MainWrapper } from '@components/organisms';
import { useLoader } from '@contexts/LoaderContext/useLoader';
import PostModel from '@models/Post';
import User from '@models/User';
import { useNavigation } from '@react-navigation/native';
import { getPosts } from '@services/PostServices/PostServices';
import { getUsers } from '@services/UsersServices/UsersServices';
import { Images } from '@theme/index';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, ListRenderItemInfo } from 'react-native';

import styles from './HomeScreen.style';

const HomeScreen = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  // const { showLoader, hideLoader } = useLoader();
  const navigation = useNavigation();

  const loadData = useCallback(async () => {
    try {
      // showLoader();
      const data = await getPosts();
      const usersData = await getUsers();
      setPosts(data);
      setUsers(usersData);
    } catch (e) {
    } finally {
      // hideLoader();
    }
  }, []);

  const getName = (userId: number): string => {
    const user = users.find((item) => item.id === userId);
    return user?.name || '';
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  const renderItem = ({ item }: ListRenderItemInfo<PostModel>) => (
    <Post
      title={item.title}
      name={getName(item.user_id)}
      content={item.body}
      onPress={() => navigation.navigate('Details', { users, item })}
      overrideContainerStyle={styles.itemContainer}
    />
  );
  return (
    <MainWrapper>
      <Image source={Images.logo} style={styles.logoStyle} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </MainWrapper>
  );
};

export default HomeScreen;
