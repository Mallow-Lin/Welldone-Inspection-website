import { Oswald, Aleo, Merriweather, Roboto } from 'next/font/google'

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const aleo = Aleo({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-aleo',
  display: 'swap',
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const fontVariables = `${oswald.variable} ${aleo.variable} ${merriweather.variable} ${roboto.variable}`
