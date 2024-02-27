import Button from './Button.jsx';

function ProjectCard({ image, imgAlt, tags, title, url, codeURL }) {
  if(url == "#" && codeURL == "#") {
    return (
      <section>
        <img src={image} class="w-full" alt={imgAlt} />
        <p>{tags}</p>
        <h4 class="text-xl p-1">{title}</h4>
        <div class="flex justify-between">
            <Button name='No Live Links' bgColor='bg-red-800 text-white italic font-bold' width='w-full' />
        </div>
      </section>
      ); 
  } else if(url == "#") {
    return(
      <section>
        <img src={image} class="w-full" alt={imgAlt} />
        <p>{tags}</p>
        <h4 class="text-xl p-1">{title}</h4>
        <div class="flex justify-between">
            <Button link={codeURL} name='GitHub' bgColor='bg-black text-white italic font-bold' width='w-full' />
        </div>
      </section>
    )
  } else if(codeURL == "#") {
    return(
    <section>
      <img src={image} class="w-full" alt={imgAlt} />
      <p>{tags}</p>
      <h4 class="text-xl p-1">{title}</h4>
      <div class="flex justify-between">
          <Button link={url} name='Live Website' bgColor='bg-green-200 italic font-bold' width='w-full' />
      </div>
    </section>
    )
  } else {
    return (
    <section>
        <img src={image} class="w-full" alt={imgAlt} />
        <p>{tags}</p>
        <h4 class="text-xl p-1">{title}</h4>
        <div class="flex justify-between">
          <Button link={url} name='Live Website' bgColor='bg-green-200 italic font-bold' width='w-full' />
          <Button link={codeURL} name='GitHub' bgColor='bg-black text-white italic font-bold' width='w-full' />
        </div>
    </section>
      )
  }
}

export default ProjectCard
