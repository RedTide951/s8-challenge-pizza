import AppBar from "./AppBar";
import React, { useState } from "react";
import { FormLabel, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";

function SiparisFormu() {

  const [formData, setFormData] = useState({
    name: "",
    note: "",
    size: "",
    crust: "",
    quantity: 1,
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

  const incrementQuantity = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity < 20 ? prevData.quantity + 1 : 20,
    }));
  };

  const decrementQuantity = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity > 1 ? prevData.quantity - 1 : 1,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return <>
    <AppBar />
    <div className="description-containter">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="numbers-container">
        <div className="price">Fiyat</div>
        <div className="point">4.9</div>
        <div>200</div>
      </div>
      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta den</p>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="ingridients-selection-container">
        <div className="size-selection">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Boyut</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
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
          <label>
            İsim:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Note:
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="count-and-price-container">


          <div>
            <button onClick={decrementQuantity}>
              -
            </button>
            <div>
              {formData.quantity}
            </div>
            <button onClick={incrementQuantity} type="submit">
              +
            </button>
          </div>

          <div className="order-summary-container"></div>
        </div>
      </div>
    </form>
  </>
}

export default SiparisFormu;
