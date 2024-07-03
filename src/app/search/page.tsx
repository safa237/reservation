import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { SearchResData } from "../types/app";
import ListingCard from "../components/ListingCard";

type searchParams ={
    location: string, 
    startDate : string, 
    endDate : string, 
    numOfGuests :string,
}
const SearchResult =async ({ searchParams: { location, startDate, endDate, numOfGuests },} : {searchParams : searchParams}) => {
    let formatedStartDate;
    let formatedEndDate;

    if(startDate && endDate){
        formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
        formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    }

    const range = `${formatedStartDate} - ${formatedEndDate}`;

    const SearchResultData : SearchResData = await getSearchResult();

  return (
    <>
    <Header placeholder={`${location} | ${startDate} | ${endDate} | ${numOfGuests} `} />
    <main>
        <section>
          <div className='container flex'>
            <div className='pt-14 pr-4'>
              <div>
                {SearchResultData.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </section>
      </main>
    <Footer />
    </>
  )
}

export default SearchResult