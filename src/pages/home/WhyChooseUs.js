import React from 'react'

const reasons = [
    {
        title: 'Direct PE Access',
        description: 'Work directly with James Jiang, P.E. — not a call center. Get engineering-level answers when you need them.',
    },
    {
        title: 'Responsive & Accountable',
        description: 'As a small business, we offer the attention to detail and fast turnaround that larger firms often cannot match.',
    },
    {
        title: 'DOB-Registered Agency',
        description: 'Fully registered with NYC DOB for TR1–TR8 special inspections, concrete testing, pile driving, and energy code compliance.',
    },
]

const WhyChooseUs = () => {
    return (
        <section className="px-5 md:px-10 lg:px-40 py-8 bg-gray-50">
            <div className="flex items-center mb-6">
                <h2 className="md:text-[35px] font-bold text-[20px] whitespace-nowrap">Why Choose Us</h2>
                <hr className="border-1 border-black flex-grow mx-4" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {reasons.map((reason) => (
                    <div key={reason.title} className="bg-white rounded-xl p-5 shadow-card border-l-4 border-[#1b6666]">
                        <h3 className="font-bold text-[#1b6666] text-lg mb-2">{reason.title}</h3>
                        <p className="font-serif text-[15px] md:text-[17px] text-gray-700">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs
