import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Headings from '@components/Headings';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Paginator from '@components/Navigation/Navigation.Paginator';

import AuthorHero from '../sections/author/Author.Hero';
import AuthorArticles from '../sections/author/Author.Articles';

function CategoryPage({ location, pageContext }) {
  const { articles, category } = pageContext;

  return (
    <Layout>
      <SEO pathname={location.pathname} title={category} />
      <Section narrow>
        <Headings.h2>{category}</Headings.h2>
        <AuthorArticles articles={articles} />
        <AuthorPaginator>
          <Paginator {...pageContext} />
        </AuthorPaginator>
      </Section>
      <AuthorsGradient />
    </Layout>
  );
}

export default CategoryPage;

const AuthorsGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const AuthorPaginator = styled.div`
  text-align: center;
`;
