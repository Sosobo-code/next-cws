import React from 'react';
import {Button} from "@/components/ui/button";

const HomePage = () => {
    return (
        <div className=" justify-center items-center h-screen" >
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="font-semibold text-5xl mb-8">Lorem Ispum Dolor Sit Amet</h1>
                <p>hello</p>
                <Button className="w-1/6">Get Started</Button>
            </div>

        </div>
    );
};

export default HomePage;