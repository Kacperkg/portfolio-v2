import Link from "next/link";

const UnderLineLink = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={link}
      className="relative w-fit uppercase after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-0 after:bg-zinc-800 after:transition-transform after:content-[''] hover:after:scale-100"
    >
      {children}
    </Link>
  );
};

export default UnderLineLink;
