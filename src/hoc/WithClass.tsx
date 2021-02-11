import React from 'react';


 const withClass = (WrappedComponent: any, className?: any) => {
    return (props: any) => (
      <div className={className}>
          <p>вава</p>
        <WrappedComponent {...props} />
      </div>
    )
}


export default withClass




