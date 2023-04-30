import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    // useForm() повертає об'єкт
    // register, щоб зареєструвати input для цього хука
    // handleSubmit, щоб отримати об'єкт який ввели в форму
    // reset, щоб очищати форму
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm();

    const save = (car) => {
        console.log(car);
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {pattern:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/})}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};