import React, {useEffect, useRef} from 'react';

const Aum = (props: any) => {
  const btnEl = useRef(null)

  useEffect(() => {
    console.log('aux class');
    btnEl!.current!.style!.backgroundColor = 'pink';
    return () => {
      console.log('aux class clean up work');
    }
  },[]) // work like didMount
//  },[props.test]) work if test property changed

    return  (
      <div>

          {props.children}
          <button ref={btnEl}>test</button>
      </div>
    )

}


export default React.memo(Aum);



