import React from 'react';
import {RespFour, RespOne, RespThree, RespTwo} from "../../../../../../assets/assets";
import ResponsibilityCard from "./ResponsibilityCard/ResponsibilityCard";

const defaultText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid asperiores atque beatae dolor " +
    "dolorem esse et, iste labore minima minusnesciunt nobis officiis pariatur, recusandae rem sit tempore, totam" +
    " voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores atque beatae dolor " +
    "dolorem esse et, iste labore minima minus nesciunt nobis officiis pariatur, recusandae rem sit tempore, " +
    "totam voluptatum."


function Responsibility() {

    return (
        <>
            <div className="h-full bg-gray-100 p-4 dark:bg-dark-color-900 w-full">
                <div className="flex justify-center items-center py-4 mb-8 md:mb-24">
                    <h1 className="text-2xl md:text-4xl text-gray-800 dark:text-gray-100 font-bold uppercase">
                        Our Responsibilities
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:flex justify-center items-center">
                    <ResponsibilityCard
                        title={"Scholarships"}
                        image={RespOne}
                        text={defaultText}
                    />
                    <ResponsibilityCard
                        title={"help other students"}
                        image={RespTwo}
                        text={defaultText}
                    />
                    <ResponsibilityCard
                        title={"help our university"}
                        image={RespThree}
                        text={defaultText}
                    />
                    <ResponsibilityCard
                        title={"build our community"}
                        image={RespFour}
                        text={defaultText}
                    />
                </div>
            </div>
        </>
    );
}

export default Responsibility;