import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../client";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await client.fetch(`*[_type == "category"]`);

        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-auto m-5 md:m-12 flex flex-col md:gap-0 ">
      <p className="xl:text-4xl text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-200 to-yellow-400 transition-all ease-in-out duration-100">
        Categories
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center gap-y-12 md:gap-x-14 lg:gap-x-24  m-10">
        {categories.map((category, index) => {
          return (
            <Link to={`/category/${category.slug.current}`} key={index}>
              <div className="block group w-28 md:w-48 cursor-pointer m-2 ">
                <img
                  src={urlFor(category.image).url()}
                  alt=""
                  className=" w-48 h-48 object-contain transition duration-500 group-hover:scale-105 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-lg p-3 rounded-lg"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center">
                    {category.categoryName}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
