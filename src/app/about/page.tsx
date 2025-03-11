"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function About() {

    const [data, setData] = useState("Amal")

    const changeData = (e: any) => {
        e.preventDefault()
    }

    useEffect(() => {
        // Perform side effect here if needed
        return () => {
            // Cleanup if necessary
        };
    }, [data])

    console.log("My data is Now", data)

    return (
        <>
            <div className="font-semibold flex flex-col items-center  justify-center m-3 border-2 bg-amber-300 p-2">
                <h1>Hello Guyss</h1>
                <div><Button onClick={changeData}>Hello</Button></div>
                
            </div>
        </>
    );
}