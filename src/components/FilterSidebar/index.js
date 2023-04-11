import React from "react";

const harga = [
  {
    id: 1,
    min: 75000,
    max: 100000,
  },
  {
    id: 2,
    min: 100000,
    max: 125000,
  },
  {
    id: 3,
    min: 125000,
    max: null,
  },
];

const kadarAir = ["rendah", "sedang", "tinggi"];
const tekstur = ["lembek", "sedang", "keras"];
const aroma = ["busuk", "tidak berbau", "harum"];

const FilterSidebar = ({ filter, changeHandler, priceChangeHandler }) => {
  return (
    <div className="col-lg-4">
      <div className="shop-filter-wrap">
        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Cari</h2>
            <div className="shop-filter-search">
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari produk"
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Harga</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Semua
                  <input
                    type="radio"
                    value={""}
                    checked={!filter.price}
                    name="price"
                    onChange={changeHandler}
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {harga.map((price) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    Rp{price.min} {price.max ? "- Rp" : ""}
                    {price.max || " ke atas"}
                    <input
                      checked={filter.price.id === price.id}
                      type="radio"
                      value={JSON.stringify(price)}
                      onChange={priceChangeHandler}
                      name="price"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Tekstur</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Semua
                  <input
                    checked={filter.tekstur === ""}
                    type="radio"
                    value=""
                    onChange={changeHandler}
                    name="tekstur"
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {tekstur.map((tekstur) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    {tekstur}
                    <input
                      checked={filter.tekstur === tekstur}
                      type="radio"
                      value={tekstur}
                      onChange={changeHandler}
                      name="tekstur"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Kadar Air</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Semua
                  <input
                    checked={filter.kadarAir === ""}
                    type="radio"
                    value=""
                    onChange={changeHandler}
                    name="kadarAir"
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {kadarAir.map((val) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    {val}
                    <input
                      checked={filter.kadarAir === val}
                      type="radio"
                      value={val}
                      onChange={changeHandler}
                      name="kadarAir"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Aroma</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Semua
                  <input
                    checked={filter.aroma === ""}
                    type="radio"
                    value=""
                    onChange={changeHandler}
                    name="aroma"
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {aroma.map((val) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    {val}
                    <input
                      checked={filter.aroma === val}
                      type="radio"
                      value={val}
                      onChange={changeHandler}
                      name="aroma"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterSidebar;
