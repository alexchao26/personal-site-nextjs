import React from 'react';

export default ({ src, alt, className }) => (
  /\.svg$/i.test(src)
    ? <img src={`/images/${src}`} alt={alt} className={className} />
    : (
      <div>
        <img
    // eslint-disable-next-line global-require, import/no-dynamic-require
          src={require(`../images/${src}`)}
          alt={alt}
          className={className}
        />
        {/* <img src={require('./images/my-small-image.png')} />
  <img src={require('./images/my-icon.svg')} /> */}
      </div>
    )
);
