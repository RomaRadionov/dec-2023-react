import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import {Car} from "../Car/car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars}/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};