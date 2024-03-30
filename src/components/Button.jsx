// interface Props {
//     link: string,
//     name: string,
//     bgColor: string,
//     width: string,
// }

function Button({ link, name, bgColor, width, target }) {
  return (
    <a
      href={link}
      target={target}
      class={bgColor + " " + width + " block p-1"}
    >
      {name}
    </a>
  );
}

export default Button;
