import React, { useState } from 'react';
import axios from "axios";
import { HeroSection } from "../../../components";
import EventsComponents from "./EventsComponents/EventsComponents";


const EventsPage = () => {
    const [page, setPage] = useState(1);

    const fetchEvents = () => {
        axios({
            method: 'GET',
            withCredentials: true,
            url: "http://localhost:5000/events",
        });
    }

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