import styles from "./styles.module.scss";

export default function Glitch(props: any) {
  return (
    <h2
      className={styles.glitch + (props.className ? " " + props.className : "")}
      data-text={props.text}
    >
      {props.text}
    </h2>
  );
}
