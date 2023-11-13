import React from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import CatalogCategories from '@/components/catalog/CatalogCategories';

const CatalogPage = () => {
  const breadcrumbs = [
    { label: 'Главная', url: '/' },
    { label: 'Каталог продукции', url: '/catalog' },
  ];

  return (
    <Layout>
      <Breadcrumbs paths={breadcrumbs} />
      <CatalogCategories/>
    </Layout>
  );
};

export default CatalogPage;