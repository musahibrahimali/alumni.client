import React from 'react';
import { HeroSection } from "../../../components";
import EventsComponents from "./EventsComponents/EventsComponents";
import { getEvents } from '../../../utils/utils';
import { useQuery } from 'react-query';


const EventsPage = () => {
    const { data, isLoading } = useQuery(
        'events', getEvents,
        {
            keepPreviousData: true,
        }
    );

    return (
        <div>
            <HeroSection
                url={"/client/events"}
                title={"All events archive"}
                message={"Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need"}
            />
            <EventsComponents />
        </div>
    );
}

export default EventsPage;