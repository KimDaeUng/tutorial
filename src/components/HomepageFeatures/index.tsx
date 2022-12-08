import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Github Code',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ML Engineer를 위한 MLOps 에서 사용하는 코드들은 다음 저장소에 있습니다.<br/>
        <a href="https://github.com/mlops-for-mle/mlops-for-mle">MLOps for MLE</a>
      </>
    ),
  },
  {
    title: 'For Next Step',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        프로젝트 학습을 끝냈거나 MLOps에 개념에 익숙하시다면 MLOps for ALL 은 어떨까요?<br/>
        MLOps for all 은 Kubeflow를 기반으로한 MLOps 플랫폼 구축을 위한 과정을 담은 튜토리얼 입니다.<br/>
        <a href="https://mlops-for-all.github.io/">MLOps for ALL</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
