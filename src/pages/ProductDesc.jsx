import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../client";

import { useParams } from "react-router-dom";
import BuyNowButtons from "../components/BuyNowButtons";

import { RichTextComponent } from "../components/RichTextComponent";
import { PortableText } from "@portabletext/react";

const ProductDesc = () => {
  let { product_name } = useParams();
  const [product, setProduct] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await client.fetch(
          `*[_type == "product" && slug.current == '${product_name}'][0]`
        );
        console.log(product);
        console.log(urlFor(product.coverImg).url());

        setImg(urlFor(product.coverImg).url());

        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-2/5 w-full  object-cover object-center rounded border border-gray-200"
            src={img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Desai Bandhu
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed my-4">
              <PortableText
                value={product?.description}
                components={RichTextComponent}
              />
            </p>

            <h1 className="text-textColorYellow text-2xl title-font font-bold mb-1">
              Buy Now At:
            </h1>

            <BuyNowButtons item={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
