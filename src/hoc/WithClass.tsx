import React from 'react';


 const WithClass = (WrappedComponent: any, className?: any) => {


    return (props: any) => (
      <div>
        <WrappedComponent/>
      </div>
    )

}


export default WithClass




