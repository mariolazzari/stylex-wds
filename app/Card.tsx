import stylex from "@stylexjs/stylex";

const styles = stylex.create({});

type Props = Readonly<{
  title: string;
  body: string;
  href: string;
}>;

export default function Card({ title, body, href }: Props) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <h2>
        {title} <span>→</span>
      </h2>
      <p>{body}</p>
    </a>
  );
}
