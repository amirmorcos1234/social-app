/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { CustomText } from '@components/atoms';
import { CommentCard, Post } from '@components/molecules';
import { MainWrapper } from '@components/organisms';
import Comment from '@models/Comment';
import { useRoute } from '@navigation/hooks/useRoute';
import { getComments } from '@services/PostServices/PostServices';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from './DetailsScreen.style';

const DetailsScreen = () => {
  const { users, item } = useRoute<'Details'>().params;
  const [comments, setComments] = useState([]);

  const getName = (userId: number): string => {
    const user = users.find((currentItem) => currentItem.id === userId);
    return user?.name || '';
  };

  const loadData = useCallback(async () => {
    try {
      const data = await getComments(item.id);
      setComments(data);
    } catch (e) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Something went wrong',
      });
    }
  }, [item.id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const renderItem = ({ item: CommentItem }: ListRenderItemInfo<Comment>) => (
    <CommentCard content={CommentItem.body} name={CommentItem.name} />
  );
  return (
    <MainWrapper>
      <FlatList
        data={comments}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <>
            <Post
              title={item.title}
              name={getName(item.user_id)}
              content={item.body}
            />
            <CustomText text="All Comments" overrideStyle={styles.comments} />
          </>
        )}
      />
    </MainWrapper>
  );
};

export default DetailsScreen;
