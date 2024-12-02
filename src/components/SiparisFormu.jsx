import AppBar from "./AppBar";
import React, { useState } from "react";

function SiparisFormu() {

  const [formData, setFormData] = useState({
    name: "",
    note: "",
    size: "",
    crust: "",
    extraIngredients: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        extraIngredients: checked
          ? [...prevData.extraIngredients, value]
          : prevData.extraIngredients.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return <>
    <AppBar />
    <div className="description-containter">
      <div>Baslık</div>
      <div className="numbers-container">
        <div>Fiyat</div>
        <div>Puan</div>
        <div>200</div>
      </div>
      <div>Açıklama</div>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="ingridients-selection-container">
        <div className="size-selection">
          <h3>Boyut Seç:</h3>
          <label>
            <input
              type="radio"
              name="size"
              value="small"
              checked={formData.size === "small"}
              onChange={handleChange}
            />
            Küçük
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="medium"
              checked={formData.size === "medium"}
              onChange={handleChange}
            />
            Orta
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="large"
              checked={formData.size === "large"}
              onChange={handleChange}
            />
            Büyük
          </label>
        </div>
        <div className="dough-selection">
          <label>
            <h3>Hamur Seç:</h3>
            <select
              name="crust"
              value={formData.crust}
              onChange={handleChange}
            >
              <option value="">Seçiniz</option>
              <option value="thin">İnce</option>
              <option value="thick">Kalın</option>
            </select>
          </label>
        </div>
        <div className="extra-ingredients-container">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="ingredients-grid">
            {[
              "Pepperoni",
              "Sosis",
              "Kanada Jambonu",
              "Tavuk Izgara",
              "Soğan",
              "Domates",
              "Mısır",
              "Sucuk",
              "Jalepeno",
              "Sarımsak",
              "Biber",
              "Ananas",
              "Kabak",
            ].map((ingredient) => (
              <label key={ingredient} className="ingredient-label">
                <input
                  type="checkbox"
                  name="extraIngredients"
                  value={ingredient}
                  onChange={handleChange}
                  checked={formData.extraIngredients.includes(ingredient)}
                />
                {ingredient}
              </label>
            ))}
          </div>
        </div>

      </div>
      <div className="purchase-container">
        <div className="note-container">
          <div>Name</div>
          <div>Note</div>
        </div>
        <div className="count-and-price-container">
          asd
        </div>
      </div>
    </form>
  </>
}

export default SiparisFormu;
