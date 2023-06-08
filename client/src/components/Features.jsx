import React from 'react'



//components
import SectionTitle from './SectionTitle'
import FeatureCard from './FeatureCard'

const Features = () => {

  const features = [
    {
        title: "Real-Time Expense Tracking",
        description:"The platform allows users to track their expenses in real-time, ensuring accurate and up-to-date financial records",
    },
    {
        title: "Categorized Spending",
        description:"This feature enables users to categorize their expenses into different categories such as groceries, transportation, entertainment, and more"

    },
    {
        title: "Categorized Spending",
        description:"This feature enables users to categorize their expenses into different categories such as groceries, transportation, entertainment, and more"
        
    },
    
    {
        title: "Financial Insights and Analytics",
        description:"The platform provides in-depth financial insights and analytics, presenting users with clear visualizations and reports."
        
    },  
    
    {
        title: "Expense Reports and Exporting",
        description:"The platform allows users to generate detailed expense reports, which can be customized based on specific requirements"
        
    }, 
    
    {
        title: "Latest Financial News Feature",
        description:"The expense tracker platform includes a feature that provides users with access to the latest financial news"
        
    }, 
]

  return (
    <div id="Features" className='mt-[100px]'>
        <SectionTitle title='Features'/>
        <div className='flex flex-wrap gap-[20px] mt-[40px] justify-center'>
        {features.map((feature, index) =>{
            return <FeatureCard key={index} title={feature.title} description={feature.description}/>
        } )}
            
        </div>
    </div>
  )
}

export default Features