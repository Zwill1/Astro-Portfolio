import Button from './Button.astro';

function ProjectCardTest({ image, imgAlt, tags, title, url, codeURL }) {
  if(url == "#") {
    return (
        <p>##</p>
      ); 
  } else {
    return (
    <section>
        <img src={image} class="w-full" alt={imgAlt} />
        <p>{tags}</p>
        <h4 class="text-xl p-1">{title}</h4>
        <div class="flex justify-between">
            <p>1</p>
            <p>2</p>
            {/* <Button link={url} name='Live Website' bgColor='bg-red-200' width='w-full' />
            <Button link={codeURL} name='GitHub' bgColor='bg-red-400' width='w-full' /> */}
        </div>
    </section>
      ); 
  }

}

export default ProjectCardTest

// interface Props {
//     image: string,
//     imgAlt: string,
//     tags: string,
//     title: string,
//     url: string,
//     codeURL: string,
// }

// const { image, imgAlt, tags, title, url, codeURL } : Props;


// <section>
//     <img src={image} class="w-full" alt={imgAlt} />
//     <p>{tags}</p>
//     <h4 class="text-xl p-1">{title}</h4>
//     <div class="flex justify-between">
//         <Button link={url} name='Live Website' bgColor='bg-red-200' width='w-full' />
//         <Button link={codeURL} name='GitHub' bgColor='bg-red-400' width='w-full' />
//     </div>
// </section>