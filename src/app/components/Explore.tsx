
import ExploreCard from './ExploreCard';
import { ExploreDate } from '../types/app';
import { getExplore } from '../utils/api';


const Explore = async () => {
    const exploreDate : ExploreDate =  await getExplore();
    console.log(exploreDate);
  return (
    <section className='pt-6'>
      <div className='container'>
        <div className=''>
           <h2 className='text-2xl font-bold'>Explore Nearby</h2>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
           {exploreDate.map((item) => (
            <ExploreCard key={item.img} img = {item.img} location = {item.location} distance = {item.distance} />
           ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;