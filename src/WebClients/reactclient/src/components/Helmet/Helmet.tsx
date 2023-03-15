import React, { ReactNode } from 'react';

interface Props {
title: string;
children: ReactNode;
}

function Helmet(props: Props) {
    document.title = 'MatuMatma - ' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet