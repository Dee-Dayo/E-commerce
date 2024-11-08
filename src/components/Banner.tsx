import {getBannersData} from "@/lib/getData";

const Banner = async () => {
    const banners await getBannersData();
    console.log(banners);

    return <div>Banner</div>
};

export default Banner;