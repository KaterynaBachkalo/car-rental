import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectFilter = (state) => state.filter;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return cars?.filter((car) =>
      car.makes.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectFavoritesCars = (state) => state.cars.favorites;

export const selectLoadMoreButton = (state) => state.cars.loadMoreButton;

export const selectCurrentPage = (state) => state.cars.currentPage;
