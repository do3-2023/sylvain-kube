import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import "./alcohol.css"
import Link from 'next/link';

type Alcohol = {
    name: string;
    image_url: string
};


export const getServerSideProps: GetServerSideProps<{ alcohol: Alcohol }> = async () => {

    let alcohol: any;

    try {
        const res = await fetch('http://api:5000/api/alcohol');
        alcohol = await res.json();

    } catch (error) {
        throw new Error('Failed to fetch data' + error);

    }

    return { props: { alcohol } };
}


export default function Alcohol({ alcohol }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <div className="container">
            <div className="card">
                <img src={alcohol.image_url} alt="Alcohol Image" />
                <h2>{alcohol.name}</h2>
            </div>

            <Link href={'/alcohols'} className="random-button">An other..</Link>
        </div>
    )
}