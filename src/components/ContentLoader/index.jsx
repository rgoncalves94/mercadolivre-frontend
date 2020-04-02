import React from "react"
import Loader from "react-content-loader"
import './styles.scss'

const ContentLoader = () => (
  <div className="content-loader">
    <Loader 
      speed={2}
      width={600}
      height={160}
      viewBox="0 0 600 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="491" y="13" rx="3" ry="3" width="88" height="6" /> 
      <rect x="7" y="6" rx="3" ry="3" width="119" height="109" /> 
      <rect x="136" y="51" rx="3" ry="3" width="432" height="6" /> 
      <rect x="136" y="67" rx="3" ry="3" width="432" height="6" /> 
      <rect x="137" y="83" rx="3" ry="3" width="432" height="6" />
    </Loader>
  </div>
)

export default ContentLoader