import React from 'react';
import {FlatList} from 'react-native';

import Layout from '../components/category-list-layout';
import Empty from '../components/Empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';

const CategoryList = ({list}) => {
  const keyExtractor = item => item.id.toString();
  const renderEmpty = () => <Empty text={'No hay categorias :('} />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => {
    return <Category {...item} />;
  };
  return (
    <Layout title="Categorias">
      <FlatList
        horizontal
        keyExtractor={keyExtractor}
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default CategoryList;
