import * as React from 'react';

export const CenteredLayout : React.FC = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        justifyContent: "center",
        boxSizing: 'border-box',
        paddingBottom: '20vh',
        overflow: 'auto',
        background: "transparent linear-gradient(180deg, #F4F4F4 0%, #E7E8E8 100%) 0% 0% no-repeat padding-box",
        opacity: 1
      }}
    >
      {props.children}
    </div>
  )
}
