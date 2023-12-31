import Image from 'next/image'

const social = [
  { 
    icon: '/img/icon-facebook.svg',
    alt: 'Facebook',
    href: 'https://www.facebook.com/clipboard-app'
  },
  {
    icon: '/img/icon-twitter.svg',
    alt: 'Twitter',
    href: 'https://www.twitter.com/clipboard-app'
  },
  {
    icon: '/img/icon-instagram.svg',
    alt: 'Instagram',
    href: 'https://www.instagram.com/clipboard-app'
  }
]

function Social() {
  return (
    <div className='flex gap-12'>
      {
        social.map(({icon, alt, href}) => (
          <a
            key={alt}
            href={href}
            target='_blank'
          >
            <Image
              src={icon}
              alt={alt}
              width={32}
              height={32}
            />
          </a>
        ))}
    </div>
    )
}

export default Social;