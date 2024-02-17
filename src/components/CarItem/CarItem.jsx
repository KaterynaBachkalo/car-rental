import React, { useState } from "react";
import css from "./CarItem.module.css";
import Modal from "../Modal/Modal";

import { ReactComponent as IconEmptyLike } from "../../img/empty-heart.svg";
import { ReactComponent as IconFillLike } from "../../img/fill-heart.svg";
import { useDispatch } from "react-redux";
import { addToFavorites, deleteFavorites } from "../../redux/carsSlice";
import Favorites from "../../pages/Favorites";

const CarItem = ({ data, handleLoadMore }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    functionalities,
    id,
    rentalCompany,
  } = data;
  const adressArr = address.split(",");

  const [isOpenModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setOpenModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setOpenModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  const addToFavorite = () => {
    dispatch(addToFavorites(id));
    setIsFavorite(true);
  };

  const deleteFavorite = () => {
    dispatch(deleteFavorites(id));
    setIsFavorite(false);
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrap}>
        <img className={css.image} src={img} alt={make} />
        {!isFavorite ? (
          <IconEmptyLike className={css.like} onClick={addToFavorite} />
        ) : (
          <IconFillLike className={css.like} onClick={deleteFavorite} />
        )}
      </div>
      <h2 className={css.title}>
        <p>
          {make} <span className={css.titleModel}>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </h2>
      <p className={css.subtitle}>
        {adressArr[1]}
        <span className={css.stroke}></span>
        {adressArr[2]}
        <span className={css.stroke}></span>
        {rentalCompany}
        <span className={css.stroke}></span> Premium
      </p>
      <p className={css.subtitle}>
        {type}
        <span className={css.stroke}></span>
        {model}
        <span className={css.stroke}></span>
        {id}
        <span className={css.stroke}></span>
        {functionalities[0]}
      </p>
      <button className={css.button} onClick={openModal}>
        Learn more
      </button>

      {isOpenModal && <Modal onClose={closeModal} key={id} data={data} />}

      {!isFavorite && <Favorites key={id} handleLoadMore={handleLoadMore} />}
    </div>
  );
};

export default CarItem;
