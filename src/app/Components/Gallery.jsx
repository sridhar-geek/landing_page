import Image from "next/image"

const Gallery = () => {
  return (
    <article className="margin my-5">
        <div className="flex justify-end gap-4">
            <button className="galleryBtn bg-primary-dark text-white font-semibold px-3 md:px-8 py-1">EXTERIORS</button>
          <button className="galleryBtn outline text-primary-dark font-bold px-2 md:px-5 py-3">INTERIORS</button>
        </div>
        
    </article>
  )
}

export default Gallery