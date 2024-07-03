import { getLive } from "../utils/api";
import { LiveData } from "../types/app";
import ExploreCard from "./ExploreCard";
import LiveCard from "./LiveCard";

const Live = async() => {
    const livedate : LiveData =await getLive();

    return (
        <section className='pt-6'>
          <div className='container'>
          <h2 className='text-2xl font-bold'>Explore Nearby</h2>
            <div className='flex space-x-3 overflow-scroll p-3 no-scrollbar'>
              {livedate.map((item)  => (
                <LiveCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
          </div>
        </section>
      );
}

export default Live