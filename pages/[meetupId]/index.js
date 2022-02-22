import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return ( 
        <MeetupDetail 
            image="https://upload.wikimedia.org/wikipedia/commons/c/c1/Aalborg_from_the_Aalborg_tower.jpg" 
            title="aaa"
            address="aaa"
            description="aaa"
        />
     );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1',
                },
            },
            { 
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Aalborg_from_the_Aalborg_tower.jpg',
                id: 'm1',
                title: 'First Meetup',
                address: 'Det er måjerfucking 9000 bitch',
                desription: 'This is the first meetup'
            }
        }
    }
}

export default MeetupDetails;