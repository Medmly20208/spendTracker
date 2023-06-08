import React from 'react'

//icon
import { ArrowLeftOnRectangleIcon,CurrencyDollarIcon,NewspaperIcon } from '@heroicons/react/24/outline'


//components
import SectionTitle from './SectionTitle'
import HowItWorksCard from './HowItWorksCard'


const HowItWorks = () => {

  const content = [
    {
        title: "Create an account",
        description:"Sign up for an account on our platform by providing your basic information.",
        icon:< ArrowLeftOnRectangleIcon className='w-[5em] h-[5em] '/>
    },
    {
        title: "Add expenses",
        description:"Start adding your expenses by entering transaction details such as date, amount, category, and payment method",
        icon:<CurrencyDollarIcon className='w-[5em] h-[5em]'/>
    },
    {
        title: "Lastest Financial News",
        description:"Stay informed about the latest financial news and market trends with our integrated news feature",
        icon:<NewspaperIcon className='w-[5em] h-[5em]'/>
    }
  ]

  return (
    <div id="How_it_works" className='mt-[100px]'>
        <SectionTitle title='How It Works'/>
        <div className='flex justify-center items-stretch gap-[10px] mt-[60px] flex-wrap'>
           {content.map((item,index)=>{
            return <HowItWorksCard icon={item.icon} key={index} number={index+1} title={item.title} description={item.description}/>
           })}
        </div>
    </div>
  )
}

export default HowItWorks