import React from 'react'
import { Link } from 'react-router-dom'

const StickyQuoteButton = () => {
    return (
        <Link
            to="/contact"
            className="md:hidden fixed bottom-4 right-4 z-30 bg-[#ecb403] text-[#1b6666] font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-[#d4a003] transition-colors"
            aria-label="Request an inspection quote"
        >
            Get a Quote
        </Link>
    )
}

export default StickyQuoteButton
