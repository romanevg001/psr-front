import React, {useEffect} from 'react';

const Aum = (props: any) => {
  useEffect(() => {
    console.log('aux class');
  },[])
//  },[props.test])

    return  (
      <div>

          {props.children}

      </div>
    )

}


export default Aum;



