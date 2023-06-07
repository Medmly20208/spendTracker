import React from 'react'

//components
import SectionTitle from './SectionTitle'
import TestimonialCard from './TestimonialCard'


const Testimonials = () => {
    
    const testimonials = [
        {
          revieweeName: "John Smith",
          revieweeTitle: "Small Business Owner",
          review: "The expense tracker platform has been a game-changer for my business. It has made tracking and managing expenses so much easier. I can easily categorize my business expenses, set budgets, and generate detailed reports.",
        },
        {
          revieweeName: "Sarah Johnson",
          revieweeTitle: "Freelancer",
          review: "As a freelancer, keeping track of my expenses used to be a daunting task. But thanks to the expense tracker platform, it's now a breeze. I can effortlessly log my expenses on-the-go and categorize them for better organization",
        },
        {
          revieweeName: "Mark Thompson",
          revieweeTitle: "Personal Finance Enthusiast",
          review: "I've tried several expense tracking platforms, and this one stands out from the rest. The user-friendly interface makes it easy to navigate and input my expenses quickly. The real-time updates ensure that my financial records are always up-to-date",
        },
        {
          revieweeName: "Emily Rodriguez",
          revieweeTitle: "College Student",
          review: "I started using the expense tracker platform to manage my personal finances as a college student, and it has been incredibly helpful. I can easily track my expenses,",
        },
        {
          revieweeName: "Michael Turner",
          revieweeTitle: "Small Business Consultant",
          review: "As a small business consultant, I recommend the expense tracker platform to my clients regularly. It is a powerful tool for maintaining financial discipline and gaining insights into business expenses.",
        },
        {
          revieweeName: "Jennifer Lee",
          revieweeTitle: "Busy Parent",
          review: "Being a busy parent, managing family expenses used to be overwhelming. But ever since I started using the expense tracker platform, it has simplified our financial management",
        },
      ];
      

  return (
    <div className='mt-[100px]'>
        <SectionTitle title='Testimonials'/>
        <div className='flex flex-wrap gap-[20px] mt-[40px] justify-center'>
            {testimonials.map((testimonial, index) => {
                return <TestimonialCard key={index} review={testimonial.review} revieweeName={testimonial.revieweeName} revieweeTitle={testimonial.revieweeTitle}/>
            })}
        </div>
    </div>
  )
}

export default Testimonials