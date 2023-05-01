import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setAllCars}) => {
    // useForm() повертає об'єкт
    // register, щоб зареєструвати input для цього хука
    // handleSubmit, щоб отримати об'єкт який ввели в форму
    // reset, щоб очищати форму
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all'});

    const save = async (car) => {
        const {data} = await carService.create(car)
        setAllCars(prev=>!prev);
        reset()
        console.log(data);
    };
    // ...register це масив або об'єкт атрибутів які ми розкладаємо в наш інпут, потрібно через спред оператор прописати щоб всі значення розкласти
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Brand error'
                },
                required: {value: true, message: 'Brand error'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input
                type="text"
                placeholder={'price'}
                {...register('price', {
                    valueAsNumber: true,
                    min: {message: 'min 0', value: 0},
                    max: {message: 'max 1000000', value: 1000000},
                    required: true
                })}
            />
            {errors.price && <span>{errors.price.message}</span>}
            <input
                type="text"
                placeholder={'year'}
                {...register('year', {
                    valueAsNumber: true,
                    min: {message: 'min 1990', value: 1990},
                    max: {message: 'current year', value: new Date().getFullYear()}
                })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarForm};