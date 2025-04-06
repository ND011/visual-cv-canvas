
import React from 'react';
import { Helmet } from 'react-helmet';
import CV from '@/components/CV';
import GithubHostingInfo from '@/components/GithubHostingInfo';

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Dhruv Vasava | AI Student Portfolio</title>
        <meta name="description" content="Portfolio and CV of Dhruv Vasava, AI-ML student at AURO University." />
      </Helmet>
      <CV />
      <GithubHostingInfo />
    </div>
  );
};

export default Index;
