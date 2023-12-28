import Image from 'next/image'

export default async function Home() {
  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center p-8 gap-10">
      <header className='text-5xl max-w-md pb-8'>Alberto Barrueta <span className='text-blue-700 capitalize'>FullStack web developer</span> </header>
      <section  className='flex w-full my-8 jus gap-[30%]'>
        <div>
          <h1 className='text-3xl'>About Me</h1>
          <p className="first-letter:text-2xl max-w-lg self-start m-2">I´m studing Enginering in Informatic Sciences at the moment and learn for my way about the world of the web development
            always with the focus in the best practices for bring the better quality of a incremental way for 
          </p>
        </div>
        <div className='flex place-items-center justify-center rounded-full bg-blue-600 w-40 h-40  '><span>Foto de perfil</span></div>

      </section>
      <section className='w-full'>
        <h1 className='text-3xl'>My Proyects</h1>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,320px))] gap-8 p-8 justify-center' >
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
          <article className='shadow-lg w-full h-60 border border-red-500 hover:scale-110 transition-transform duration-200'></article>
        </div>
      </section>
    </main>
  )
}
