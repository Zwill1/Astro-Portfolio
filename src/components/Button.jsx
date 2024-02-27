// interface Props {
//     link: string,
//     name: string,
//     bgColor: string,
//     width: string,
// }

function Button({link, name, bgColor, width}) {
  return (
    <a href={link} target="_blank" class={bgColor + " " + width + " block p-1 rounded-3xl"}>
        {name}
    </a>
  )
}

export default Button
