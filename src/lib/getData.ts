import {client} from '@/sanity/lib/client'
import {bannerQuery, bestSellersQuery, productsQuery} from "@/lib/query";

export const revalidate = 0;

const getBannersData = async () => {
    return await client.fetch(bannerQuery);
};

const getProductsData = async () => {
    return await client.fetch(productsQuery);
};

const getBestSellersData = async () => {
    return await client.fetch(bestSellersQuery);
};

export {getBannersData, getProductsData, getBestSellersData};