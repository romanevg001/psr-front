import React from 'react';

export default  (props: any) => (
    <div className={props.classes}>
      <p>WithClass2 </p>
      {props.children}
    </div>
  )
