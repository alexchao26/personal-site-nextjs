/* eslint-disable global-require, import/no-dynamic-require */
import React from 'react';

export default ({ src, alt, className }) => (
  /\.svg$/i.test(src)
    ? <img src={`/images/${src}`} alt={alt} className={className} />
    : (
      <div className={className}>
        <div className="image-container">
          <img
            src={require(`../images/${src}?lqip`)}
            alt={alt}
            className={`blur-image ${className}`}
          />
          <img
            src={require(`../images/${src}`)}
            alt={alt}
            className={className}
          />


        </div>
        <style jsx>
          {`
          .image-container {
            position: relative;
          }
          .blur-image img {
            blur(25px);
          }
          img {
            position: absolute;
            top: 0;
            left: 0;
          }
          `}
        </style>
      </div>
    )
);
