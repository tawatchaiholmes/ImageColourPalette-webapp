import styles from "@/styles/Home.module.css"
import React from "react"

function DisplayImage({ uploadedImage, colorPalette, gallery }) {
  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImage ? (
          <img src={uploadedImage} alt="Image" />
        ) : (
          <h2>Image Here...</h2>
        )}
      </div>
    </div>
  )
}

export default DisplayImage
