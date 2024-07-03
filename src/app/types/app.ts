type ExploreItem = {
    img: string;
    location: string;
    distance: string;
};
export type ExploreDate = ExploreItem[];

type LiveItem = {
    img: string;
    title: string;
}
export type LiveData = LiveItem[];

export type ListingCard = {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: number;
    lat : number;
}
export type SearchResData = ListingCard[];