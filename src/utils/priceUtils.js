export const getPriceRangeFromCars = (cars) => {
    if (!cars.length) return { minPrice: 0, maxPrice: 0 };

    let minPrice = Number(cars[0].rentalPrice);
    let maxPrice = Number(cars[0].rentalPrice);

    cars.forEach((car) => {
        const price = Number(car.rentalPrice);
        if (price < minPrice) minPrice = price;
        if (price > maxPrice) maxPrice = price;
    });

    return { minPrice, maxPrice };
};

export const generatePriceOptions = (min = 30, max = 200, step = 10) => {
    const options = [];
    for (let price = min; price <= max; price += step) {
        options.push({ value: price.toString(), label: price.toString() });
    }
    return options;
};
