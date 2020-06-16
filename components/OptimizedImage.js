/* eslint-disable global-require, import/no-dynamic-require */
import React from 'react';
import styles from '@styles/components/OptimizedImage.module.scss';

export default ({ src, alt, className }) => (
  // do not optimize svg files
  /\.svg$/i.test(src)
    ? <img src={`/images/${src}`} alt={alt} className={`${className} ${styles.svgImage}`} />
    : (
      // className trickles down for sizing container and img tags
      <div className={className}>
        <div className={styles.imageContainer}>
          {/* low quality image in-lined (base64) as a placeholder */}
          <img
            src={require(`../images/${src}?lqip`)}
            alt={alt}
            className={className}
          />
          <img
            src={require(`../images/${src}`)}
            alt={alt}
            className={className}
          />
        </div>
      </div>
    )
);
