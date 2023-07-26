import Link from "next/link";

const menuItems = [
  {
    id: 1,
    title: "FAQs",
    href: "faqs",
  },
  {
    id: 2,
    title: "Contact Us",
    href: "contact-us",
  },
  {
    id: 3,
    title: "Privacy Policy",
    href: "privacy",
  },
  {
    id: 4,
    title: "Press Kit",
    href: "press-kit",
  },
  {
    id: 5,
    title: "Install Guide",
    href: "install-guide",
  },
];

function Nav() {
  return (
    <nav className="flex flex-col flex-wrap items-center gap-6 text-lg text-dark-grayish-blue md:flex-row md:text-base md:gap-3">
      {menuItems.map(({ id, title, href }) => (
        <Link
          key={id}
          href={href}
          className="md:w-1/4 hover:text-strong-cyan"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
