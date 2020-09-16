import React, {useEffect, useRef} from 'react';

const Aum = (props: any) => {
  const btnEl = useRef(null)

  useEffect(() => {
    console.log('aux class');
    btnEl!.current!.style!.backgroundColor = 'pink';
  },[])
//  },[props.test])

    return  (
      <div>

          {props.children}
          <button ref={btnEl}>test</button>
      </div>
    )

}


export default Aum;



