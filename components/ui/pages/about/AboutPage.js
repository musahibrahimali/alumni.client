import React from 'react';
import { CommitteeCard, HeroSection, StatisticsCard, TestimonialCard } from "../../../components";
import {
    Committee1,
    Committee2,
    Committee3,
    Committee5,
    Committee6,
    Committee7,
    Committee8,
    Testimonial1, Testimonial2, Testimonial3
} from "../../../../assets/assets";

const AboutPage = () => {
    return (
        <>
            <HeroSection
                url={"/client/about"}
                title={"About Us"}
                message={"Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need"}
            />

            <div className="flex flex-col justify-between px-32 py-44 bg-events-color">
                <div className="bg-white my-44 relative dark:bg-gray-900 shadow-lg px-24 py-24">
                    <div className="absolute -top-32 -left-24 bg-about-one bg-center bg-cover bg-no-repeat h-80 w-1/2 px-4 py-4">

                    </div>

                    <div className="absolute -top-24 -right-6 px-4 py-4">
                        <h1 className="text-white dark:text-gray-400 font-bold text-4xl md:text-8xl">
                            1834
                        </h1>
                    </div>
                    <div className="flex justify-end items-end pl-10">
                        <h1 className="text-gray-800 dark:text-gray-100 font-bold text-xl md:text-4xl">
                            ESTD of This Alumni Association
                        </h1>
                    </div>
                    <div className="flex flex-col pt-28 justify-end items-end">
                        <p className="text-gray-700 dark:text-gray-200">
                            Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endrerit quis, nisi.
                            Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sed fringilla mauris sit amet nibh.
                            Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec arcu.
                            Quisque manisl idUt leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec ante tempus
                            hendrerit. Curabitur at lacus ac velit ornare lobortis. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. In turpis. Quisque id mi.Aenean viverra rhoncus pede.
                            Phasellus leo dolor, tempus non, auctor endrerit quis, nisi. Fusce neque. Donec vitae orci
                            sed dolor rutrum auctor. Sed fringilla mauris sit amet nibh.Etiam rhoncus. Ut leo. Morbi mollis
                            tellus ac sapien. Fusce fermentum oo nec arcu. Quisque malesuada placerat nisl. Etiam sit amet
                            orci eget faucitincidunt. Quisque rutrum. Pellentesque posuere. Praesent ac massa at ligula
                            laoureet iaculis. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.
                        </p>
                    </div>
                </div>

                <div className="bg-white my-44 relative dark:bg-gray-900 shadow-lg px-24 py-24">
                    <div className="absolute -top-32 -right-24 bg-about-two bg-center bg-cover bg-no-repeat h-80 w-1/2 px-4 py-4">

                    </div>

                    <div className="absolute -top-24 -left-6 px-4 py-4">
                        <h1 className="text-white font-bold text-4xl md:text-8xl dark:text-gray-400">
                            1920
                        </h1>
                    </div>
                    <div className="flex justify-start items-start pr-10">
                        <h1 className="text-gray-800 dark:text-gray-100 font-bold text-xl md:text-4xl">
                            Our First Achivement in History
                        </h1>
                    </div>
                    <div className="flex flex-col pt-28 justify-start items-start">
                        <p className="text-gray-700 dark:text-gray-200">
                            Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endrerit quis, nisi.
                            Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sed fringilla mauris sit amet nibh.
                            Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec arcu.
                            Quisque manisl idUt leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec ante tempus
                            hendrerit. Curabitur at lacus ac velit ornare lobortis. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. In turpis. Quisque id mi.Aenean viverra rhoncus pede.
                            Phasellus leo dolor, tempus non, auctor endrerit quis, nisi. Fusce neque. Donec vitae orci
                            sed dolor rutrum auctor. Sed fringilla mauris sit amet nibh.Etiam rhoncus. Ut leo. Morbi mollis
                            tellus ac sapien. Fusce fermentum oo nec arcu. Quisque malesuada placerat nisl. Etiam sit amet
                            orci eget faucitincidunt. Quisque rutrum. Pellentesque posuere. Praesent ac massa at ligula
                            laoureet iaculis. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.
                        </p>
                    </div>
                </div>

                <div className="bg-white my-44 relative dark:bg-gray-900 shadow-lg px-24 py-24">
                    <div className="absolute -top-32 -left-24 bg-about-three bg-center bg-cover bg-no-repeat h-80 w-1/2 px-4 py-4">

                    </div>

                    <div className="absolute -top-24 -right-6 px-4 py-4">
                        <h1 className="text-white font-bold text-4xl md:text-8xl">
                            2006
                        </h1>
                    </div>
                    <div className="flex justify-end items-end pl-10">
                        <h1 className="text-gray-800 dark:text-gray-100 font-bold text-xl md:text-4xl">
                            Our New Genaretion
                        </h1>
                    </div>
                    <div className="flex flex-col pt-28 justify-end items-end">
                        <p className="text-gray-700 dark:text-gray-200">
                            Aenean viverra rhoncus sspede. Phasellssus leo dolor, tempus non, auctor endrerit quis, nisi.
                            Fusce neque. Donec vitae orci sed dolor rutrum ausssctor. Sed fringilla mauris sit amet nibh.
                            Etiam rhoncus. Ut lddffdfqwqeo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec arcu.
                            Quisque manisl idUt leo. Morbi mollis tellus ac sapien. Fusce fermentum oo nec ante tempus
                            hendrerit. Curabitur at lacus ac velit ornare lobortis. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. In turpis. Quisque id mi.Aenean viverra rhoncus pede.
                            Phasellus leo dolor, tempus non, auctor endrerit quis, nisi. Fusce neque. Donec vitae orci
                            sed dolor rutrum auctor. Sed fringilla mauris sit amet nibh.Etiam rhoncus. Ut leo. Morbi mollis
                            tellus ac sapien. Fusce fermentum oo nec arcu. Quisque malesuada placerat nisl. Etiam sit amet
                            orci eget faucitincidunt. Quisque rutrum. Pellentesque posuere. Praesent ac massa at ligula
                            laoureet iaculis. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo.
                        </p>
                    </div>
                </div>
            </div>

            {/* statistics card*/}
            <StatisticsCard />

            {/* committee */}
            <div className="bg-white dark:bg-gray-900 flex flex-col justify-between items-center py-24 px-10">
                <div className="flex justify-center items-center mb-24 mt-10">
                    <h1 className="text-xl md:text-4xl tracking-wider capitalize font-bold text-gray-900 dark:text-gray-200">
                        Our Honourable committee
                    </h1>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                    <CommitteeCard
                        name={"Bryan Watson"}
                        position={"president"}
                        image={Committee1}
                    />
                    <CommitteeCard
                        name={"Carlos Helu"}
                        position={"vice president"}
                        image={Committee2}
                    />
                    <CommitteeCard
                        name={"Angle Tuni"}
                        position={"Secretary"}
                        image={Committee3}
                    />
                    <CommitteeCard
                        name={"Alex Khalifa"}
                        position={"Ass Secretary"}
                        image={Committee5}
                    />
                    <CommitteeCard
                        name={"Alex Tuntuni"}
                        position={"office Secretary"}
                        image={Committee6}
                    />
                    <CommitteeCard
                        name={"Mal Muhit"}
                        position={"finance member"}
                        image={Committee7}
                    />
                    <CommitteeCard
                        name={"prince rimon"}
                        position={"committee member"}
                        image={Committee8}
                    />
                    <CommitteeCard
                        name={"Prince Kamla"}
                        position={"Committee Member"}
                        image={Committee1}
                    />
                </div>
            </div>

            {/* testimonials */}
            <div className="bg-events-color dark:bg-gray-900 px-12 py-24 flex flex-col justify-between">
                <div className="flex justify-center items-center mb-24 mt-12">
                    <h1 className="text-xl md:text-4xl tracking-wider capitalize font-bold text-gray-900 dark:text-gray-200">
                        Some Speech About Us
                    </h1>
                </div>

                <div className="grid gap-2 md:grid-cols-3">

                    <TestimonialCard
                        name={"Robert Albert"}
                        testimony={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut beatae cupiditate eos est expedita iure laborum magnam necessitatibus, nihil nulla obcaecati officiis perferendis possimus quae qui, repellat tenetur voluptatibus."}
                        image={Testimonial3}
                        position={"Founder at Boxr"}
                    />
                    <TestimonialCard
                        name={"Akamla Albert"}
                        testimony={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut beatae cupiditate eos est expedita iure laborum magnam necessitatibus, nihil nulla obcaecati officiis perferendis possimus quae qui, repellat tenetur voluptatibus."}
                        image={Testimonial1}
                        position={"Founder at Kamlakana"}
                    />
                    <TestimonialCard
                        name={"Taklo Nahid"}
                        testimony={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut beatae cupiditate eos est expedita iure laborum magnam necessitatibus, nihil nulla obcaecati officiis perferendis possimus quae qui, repellat tenetur voluptatibus."}
                        image={Testimonial2}
                        position={"Minister at Nara"}
                    />
                </div>
            </div>

        </>
    );
}

export default AboutPage;