import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty, HomeHeader} from './components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {
    list: postList,
    isError,
    isLoading,
    refresh,
    fetchNextPage,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id.toString()}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        refreshing={isLoading}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty error={isError} loading={isLoading} refetch={refresh} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
