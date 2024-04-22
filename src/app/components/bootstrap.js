"use client";
import React from 'react'
import { useEffect } from 'react';

const Bootstrap = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, [])

    return (
        <></>
    )
}

export default Bootstrap;