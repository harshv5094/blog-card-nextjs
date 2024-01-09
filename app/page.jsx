import Image from 'next/image'

export default function Home() {
  return (
    <main className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
     bg-white w-[24em] max-md:w-[20em] max-sm:w-[18em] h-[32em] max-md:h-[30em] max-sm:h-[30em] rounded-xl p-5 border-2 border-black shadow-custom ">
      <div className='flex justify-center'>
        <Image
          src="/illustration-article.svg"
          width={420}
          height={80}
          alt="blog-banner"
          className='rounded-xl'
        />
      </div>

      <div className='flex justify-start mt-5'>
        <h1 className='text-sm font-bold bg-yellow rounded-lg p-2 text-center'>Learning</h1>
      </div>

      <div className='mt-3 mb-2'>
        Published 21 Dec 2023

        <div className=' cursor-pointer text-xl mt-2 mb-2 font-bold'>
          HTML & CSS foundations
        </div>

        <p className='text-[16px] text-grey'>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className='flex justify-start my-2'>
          <Image
            src={'/image-avatar.webp'}
            width={40}
            height={40}
            alt='avatar'
          />
          <span className='font-bold mt-3 mx-5'>Gerg Hooper</span>
        </div>

      </div>

    </main>
  )
}
