import React from "react";

const harga = [
  {
    id: 1,
    min: 15000,
    max: 20000,
  },
  {
    id: 2,
    min: 20000,
    max: 30000,
  },
  {
    id: 3,
    min: 30000,
    max: 50000,
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
                <li key={price.id}>
                  <label className="topcoat-radio-button__label">
                    Rp{new Intl.NumberFormat().format(price.min)} {new Intl.NumberFormat().format(price.max) ? "- Rp" : ""}
                    {new Intl.NumberFormat().format(price.max) || " ke atas"}
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
              {tekstur.map((val) => (
                <li key={val}>
                  <label className="topcoat-radio-button__label">
                    {val}
                    <input
                      checked={filter.tekstur === val}
                      type="radio"
                      value={val}
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
                <li key={val}>
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
                <li key={val}>
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
