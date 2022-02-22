import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Aalborg_from_the_Aalborg_tower.jpg',
        address: 'Det er måjerfucking 9000',
        description: 'blablabla'
    },
    {
        id: 'm2',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Aalborg_from_the_Aalborg_tower.jpg',
        address: 'Det er måjerfucking 9000',
        description: 'blablabla'
    },
    {
        id: 'm3',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Aalborg_from_the_Aalborg_tower.jpg',
        address: 'Det er måjerfucking 9000',
        description: 'blablabla'
    }
];

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return ( 
        <MeetupList meetups={loadedMeetups} />
     );
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}

export default HomePage;