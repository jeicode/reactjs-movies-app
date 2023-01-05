import React from "react";
import ContentLoader from 'react-content-loader'
import './Loader.css'

export default function Loader(props) {

  return (
    <ContentLoader className="loader-container"
      width={'100%'}
      height={'100vh'}
      viewBox="0 0 800 575"
      backgroundColor="black"
      foregroundColor="#2b2d2b"
      {...props}
    >
      <rect className="item-loader" x="12" y="58" rx="2" ry="2" />
      <rect className="item-loader" x="240" y="57" rx="2" ry="2" />
      <rect className="item-loader" x="467" y="56" rx="2" ry="2" />


      <rect className="item-loader" x="12" y="283" rx="2" ry="2" />
      <rect className="item-loader" x="240" y="281" rx="2" ry="2" />
      <rect className="item-loader" x="468" y="279" rx="2" ry="2" />

    </ContentLoader>
  )
}
