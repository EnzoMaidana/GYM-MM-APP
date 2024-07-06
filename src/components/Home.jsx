import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../actions";
import { Link } from 'react-router-dom';
import ClientCard from "./clientCard";
import s from '../styles/Home.module.css';
import img from '../img/Fondo.jpeg'

export default function Home(){
    
    const dispatch = useDispatch();

    const allClients = useSelector((state) => state.clients);

    console.log(allClients)

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch]);

    return(
        <div className={s.container} style={{ backgroundImage: `url(${img})` }}>
            <h1>MM Entrenamiento</h1>
            <Link to='/plans'><li><a>Create activity</a></li></Link>
            <div className={s.cards}>
                {
                    allClients?.map((e) => {
                        return(
                            <ClientCard
                                key={e.id}
                                name={e.name}
                                lastname={e.lastname}
                            />

                            
                        )
                    })
                }
            </div>
        </div>
    )
};