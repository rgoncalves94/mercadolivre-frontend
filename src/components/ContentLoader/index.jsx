import React from "react"
import Loader from "react-content-loader"
import './styles.scss'

function ContentLoader() {
    return (
        <div className="content-loader">
            <Loader 
                speed={2}
                width={600}
                height={160}
                viewBox="0 0 600 160"
                backgroundColor="#eee"
                foregroundColor="#ddd">
                    <rect x="7" y="6" rx="3" ry="3" width="180" height="180" /> 
                    <rect x="200" y="50" rx="3" ry="3" width="600" height="15" /> 
                    <rect x="200" y="75" rx="3" ry="3" width="600" height="15" /> 
                    <rect x="200" y="100" rx="3" ry="3" width="600" height="15" />
            </Loader>
        </div>
    )
}

export default ContentLoader