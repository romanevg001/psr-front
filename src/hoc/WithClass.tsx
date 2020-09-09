import React from 'react';


 const WithClass = (WrappedComponent: any, className?: any) => {
    return (props: any) => (
      <div className={className}>
          <p>вава</p>
        <WrappedComponent {...props} />
      </div>
    )
}


export default WithClass




