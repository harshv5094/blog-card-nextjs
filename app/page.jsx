import Image from 'next/image'

export default function Home() {
  return (
    <main className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
     bg-white w-[24em] max-md:w-[20em] max-sm:w-[18em] h-[30em] max-md:h-[28em] max-sm:h-[26em] rounded-xl p-5 border-2 border-black shadow-custom ">
      <div className='flex justify-center'>
        <Image
          src="/illustration-article.svg"
          width={420}
          height={100}
          alt="blog-banner"
          className='rounded-xl'
        />
      </div>

      <div className='flex justify-start mt-5'>
        <h1 className='text-md font-bold bg-yellow rounded-lg p-2 text-center'>Learning</h1>
      </div>

      <div>
        Published
      </div>
    </main>
  )
}
