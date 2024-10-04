import React from 'react';
import {Button} from "@/components/ui/button";

const HomePage = () => {
    return (
        <div className="relative justify-center items-center h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/assets/video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"/>
            <div className="relative flex flex-col justify-center items-center h-screen z-10">
                <h1 className="font-semibold text-5xl mb-8 text-white">Lorem Ispum Dolor Sit Amet</h1>
                <Button className="w-1/6">Get Started</Button>
            </div>
        </div>
    );
};

export default HomePage;