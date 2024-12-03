import AppBar from "./AppBar";
import React from "react";
import OrderForm from "./OrderForm";

function OrderPage() {
  return (
    <>
      <AppBar />
      <div className="order-page-wrapper">
        <div className="description-container">
          <div className="item-heading-container">
            <h2 className="item-name-heading">Position Absolute Acı Pizza</h2>
          </div>
          <div className="numbers-container">
            <p className="price">85.50₺</p>
            <p></p>
            <p className="rating">4.9</p>
            <p className="bilinmeyen-sayi">200</p>
          </div>
          <div className="item-description-text">
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir
            </p>
          </div>
        </div>
        <OrderForm />
        {/* <div className="description-containter">
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
        <div className="size-selection"> */}

        {/*
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
    </form> */}
      </div>
    </>
  );
}

export default OrderPage;
