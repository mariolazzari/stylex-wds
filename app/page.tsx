import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  heading: {
    color: "blue",
    margin: 100,
  },
});

export default function Home() {
  return (
    <main>
      <h1 {...stylex.props(styles.heading)}>Title</h1>
      <button>Ok</button>
    </main>
  );
}
