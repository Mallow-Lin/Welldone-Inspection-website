import React from 'react'

const testimonials = [
    {
        quote: 'WellDone Inspection provided thorough, timely inspections on our project. Their responsiveness and attention to detail made coordination seamless.',
        author: 'General Contractor',
        project: 'NYC Commercial Build',
    },
]

const Testimonials = () => {
    return (
        <section className="px-5 md:px-10 lg:px-40 py-8">
            <div className="flex items-center mb-6">
                <h2 className="md:text-[35px] font-bold text-[20px] whitespace-nowrap">What Clients Say</h2>
                <hr className="border-1 border-black flex-grow mx-4" />
            </div>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                {testimonials.map((t, i) => (
                    <blockquote key={i} className="bg-gray-100 rounded-xl p-6 border-l-4 border-[#ecb403]">
                        <p className="font-serif text-[15px] md:text-[18px] italic text-gray-700 mb-3">&ldquo;{t.quote}&rdquo;</p>
                        <footer className="text-sm text-[#1b6666] font-semibold">
                            — {t.author}, {t.project}
                        </footer>
                    </blockquote>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
