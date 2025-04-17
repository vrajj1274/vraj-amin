import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#10002b] hover:bg-[#240046] transition-colors"
    >
      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
