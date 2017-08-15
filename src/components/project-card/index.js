import React from 'react';
import classNames from 'classnames/bind';

export default function ProjectCard(props) {
  const Styles = {
    relativeContainer: {
      position: 'relative',
      width: '1440px',
      height: '405px'
    },
    cardImage: {
      width: '1440px',
      height: '405px'
    },
    textContainer: {
      position: 'absolute',
      width: '100%',
      height: '194px',
      bottom: 0
    }
  };

  const classes = {
    wrapper: 'margin-0-auto max-width-1440',
    textContainer: 'gradient ta-center',
    header: 'fs-33px f-lh-33px fw-normal mt-74px mb-10px ts-0-0-1-black-015',
    link: 'font-belwe fs-20px tt-lowercase'
  };

  return (
    <div className={classNames(props.slug, classes.wrapper)}>
      <div style={Styles.relativeContainer}>
        <img src={props.heroImage} style={Styles.cardImage} />
        <div className={classes.textContainer} style={Styles.textContainer}>
          <h2 className={classes.header}>
            {props.name}
          </h2>
          <a href={`#${props.slug}`} className={classes.link}>
            Ontdek
          </a>
        </div>
      </div>
    </div>
  )
}
