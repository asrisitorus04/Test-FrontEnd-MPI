import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActive } from "../utils/redux/navActive/navSlice";

const Inventory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Inventory"));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center">
          Inventory-Farmasi
        </h1>
        <p className="text-center mt-8">
          Perbekalan farmasi adalah sediaan farmasi yang terdiri dari obat,
          bahan obat,
        </p>
        <p className="text-center">
          {" "}
          alat kesehatan, reagensia, radio farmasi dan gas medis.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-4 ml-2 mt-6 mb-4">
          <div>
            <figure>
              <img
                src="https://cdn0-production-images-kly.akamaized.net/QD3Gk7JzoDzYfRr9oHEZjvcY-KA=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3172766/original/024217600_1594118560-20-mg-label-blister-pack-208512__3_.jpg"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Obat
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://awsimages.detik.net.id/community/media/visual/2021/10/04/ilustrasi-obat_169.jpeg?w=700&q=90"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Obat Pening
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1608790238/attached_image/thalidomide.jpg"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Obat Break Sleep
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://krakataumedika.com/images/2020/05/obat_obat.jpg"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Obat Suntik
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://assets.kompasiana.com/items/album/2020/06/16/media-918154-smxx-5ee86d43097f3651e51460b2.jpg?t=o&v=770"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Test Lab
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://asset.kompas.com/crops/brb1-lA0lMIO0F512C_TfhsQAF0=/0x0:500x333/750x500/data/photo/2022/10/20/6350da0d3252c.jpg"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Obat Sirup
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://cdn0-production-images-kly.akamaized.net/QD3Gk7JzoDzYfRr9oHEZjvcY-KA=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3172766/original/024217600_1594118560-20-mg-label-blister-pack-208512__3_.jpg"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              pill
            </div>
          </div>
          <div>
            <figure>
              <img
                src="https://cdn0-production-images-kly.akamaized.net/QD3Gk7JzoDzYfRr9oHEZjvcY-KA=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3172766/original/024217600_1594118560-20-mg-label-blister-pack-208512__3_.jpg"
                alt="obat"
                className="w-80 h-48"
              />
            </figure>
            <div className="border text-center font-semibold bg-slate-400">
              Obat
            </div>
          </div>
        </div>

        <div className="mt-10 ml-4 text-sky-700">
          Farmasi adalah ilmu yang mempelajari segala seluk-beluk mengenai obat.
          Ilmu farmasi adalah terapan dari (sedikitnya) tiga bidang ilmu yaitu
          kedokteran, kimia, dan biologi. Ruang lingkup ilmu farmasi tak hanya
          berfokus pada bidang ilmu eksakta, melainkan juga pada bidang ilmu
          sosial seperti Manajemen Farmasi dan Farmakoekonomi.
        </div>

        <div>
          <figure className="mt-10">
            <img
              src="https://glints.com/id/lowongan/wp-content/uploads/2020/05/prospek-kerja-farmasi-1.jpg"
              alt="obat"
              className="shadow-"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Inventory;
