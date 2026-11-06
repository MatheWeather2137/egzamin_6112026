import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const initialImages = [
  { id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
  { id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43 },
  {
    id: 2,
    alt: "Dalmatyńczyk",
    filename: "obraz3.jpg",
    category: 2,
    downloads: 2,
  },
  {
    id: 3,
    alt: "Świnka morska",
    filename: "obraz4.jpg",
    category: 2,
    downloads: 53,
  },
  {
    id: 4,
    alt: "Rotwailer",
    filename: "obraz5.jpg",
    category: 2,
    downloads: 43,
  },
  { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11 },
  { id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, downloads: 22 },
  { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33 },
  {
    id: 8,
    alt: "Świnka morska",
    filename: "obraz9.jpg",
    category: 2,
    downloads: 123,
  },
  {
    id: 9,
    alt: "Foksterier",
    filename: "obraz10.jpg",
    category: 2,
    downloads: 22,
  },
  {
    id: 10,
    alt: "Szczeniak",
    filename: "obraz11.jpg",
    category: 2,
    downloads: 12,
  },
  {
    id: 11,
    alt: "Garbus",
    filename: "obraz12.jpg",
    category: 3,
    downloads: 321,
  },
];

function App() {
  const [images, setImages] = useState(initialImages);
  const [showCategory1, setShowCategory1] = useState(true);
  const [showCategory2, setShowCategory2] = useState(true);
  const [showCategory3, setShowCategory3] = useState(true);

  const handleDownload = (id) => {
    setImages((prevImages) =>
      prevImages.map((img) =>
        img.id === id ? { ...img, downloads: img.downloads + 1 } : img,
      ),
    );
  };
  const filteredImages = images.filter((img) => {
    if (img.category === 1 && showCategory1) return true;
    if (img.category === 2 && showCategory2) return true;
    if (img.category === 3 && showCategory3) return true;
    return false;
  });
  return (
    <div className="container my-4">
      <h1 className="mb-4">Kategorie zdjęć</h1>
      <div className="mb-4 d-flex gap-4">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchKwiaty"
            checked={showCategory1}
            onChange={(e) => setShowCategory1(e.target.checked)}
          />
          <label className="form-check-label" htmlForm="switchKwiaty">
            Kwiaty
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchZwierzeta"
            checked={showCategory2}
            onChange={(e) => setShowCategory2(e.target.checked)}
          />
          <label className="form-check-label" htmlForm="switchZwierzeta">
            Zwierzęta
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchSamochody"
            checked={showCategory3}
            onChange={(e) => setShowCategory3(e.target.checked)}
          />
          <label className="form-check-label" htmlForm="switchSamochody">
            Samochody
          </label>
        </div>
      </div>
      <div className="row g-4">
        {filteredImages.map((img) => (
          <div key={img.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm" style={{ margin: "5px" }}>
              <img
                src={`/assets/${img.filename}`}
                alt={img.alt}
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title fs-6">Pobrań: {img.downloads}</h4>
                <button
                  onClick={() => handleDownload(img.id)}
                  className="btn btn-success btn mt-2"
                >
                  Pobierz
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
