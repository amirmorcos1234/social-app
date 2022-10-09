/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { Post } from '@components/molecules';
import { MainWrapper } from '@components/organisms';
import PostModel from '@models/Post';
import User from '@models/User';
import { RouteParamsList } from '@navigation/router';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getPosts } from '@services/PostServices/PostServices';
import { getUsers } from '@services/UsersServices/UsersServices';
import { Images } from '@theme/index';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, ListRenderItemInfo } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from './HomeScreen.style';

const HomeScreen = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation<StackNavigationProp<RouteParamsList>>();

  const loadData = useCallback(async () => {
    try {
      const data = await getPosts();
      const usersData = await getUsers();
      setPosts(data);
      setUsers(usersData);
    } catch (e) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Something went wrong',
      });
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
