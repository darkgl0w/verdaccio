import { ListProps, default as MaterialUIList } from '@mui/material/List';
import React, { forwardRef } from 'react';

type ListRef = HTMLUListElement;

const List = forwardRef<ListRef, ListProps>(function List(props, ref) {
  return <MaterialUIList {...props} ref={ref} />;
});

export default List;
