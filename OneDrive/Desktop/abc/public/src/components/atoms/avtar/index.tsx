/* eslint-disable react/no-children-prop */

import React, { memo } from 'react';
import Avatar, { AvatarTypeMap } from '@mui/material/Avatar';

interface IAvatarProps extends AvatarTypeMap<{}, 'div'> {
  id: string;
  src: string;
  srcSet?: string;
  name: string;
  alt: string;
  sizes?: string;
  children?: React.ReactNode;
  component: React.ElementType;
}

const AvatarComponent = (props: IAvatarProps) => {
  const { id, src, name, children, component, alt, sizes, srcSet } = props;
  return (
    <Avatar
      id={id}
      name={name}
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      variant="circular"
      children={children}
      component={component}
    />
  );
};

export default memo(AvatarComponent);
