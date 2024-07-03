import Link from "next/link"

const Greatest = () => {
  return (
    <section className="mb-16">
      <div className='container relative cursor-pointer pt-6 '>
        <div className='relative h-[50px] min-w-[300px]'>
          <img
            src='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            
            className='rounded-2xl -z-10 object-cover w-full h-[350px]'
            alt='GreatestOutdoors-Img'
          />
        </div>
        <div className='absolute top-32 left-12'>
          <h3 className='text-4xl mb-3 w-64'>The Greatest Outdoors</h3>
          <p>Wishlists Curated by Airbnb</p>
          <Link
            href='/'
            className='text-sm px-4 py-2 rounded-lg mt-5 block text-white  bg-gray-900'
          >
            Get Inspired
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Greatest