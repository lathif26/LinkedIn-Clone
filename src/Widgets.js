import FiberManualRecordIcon  from '@mui/icons-material/FiberManualRecord';
import  InfoIcon  from '@mui/icons-material/Info';
import React from 'react';
import "./Widgets.css"

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon/>
        </div>
        {newsArticle("REACT FAM IS BACK!!", "Top news - 1Lakh new subscribers" )}
        {newsArticle("Samsung to recruit 1000", " Management - 2,567 readers" )}
        {newsArticle("Amazon India shuts third business", "Business - 24,478 readers" )}
        {newsArticle("Biz2X to hire 250", "Top news - 1Lakh new subscribers" )}
        {newsArticle("Housing prices rise across metros", "Hike - 1,874 readers" )}
    </div>
  )
}

export default Widgets