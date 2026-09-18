import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";

const ProductDetails = async({ params }) => {
    const {id} = await params;
    const product = await getSingleProduct(id);
    // console.log(product);
  const {
    name,
    price,
    image,
    category,
    description,
    rating,
  } = product;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2">

        {/* Product Image */}
        <div className="flex min-h-[400px] items-center justify-center rounded-xl bg-gray-100">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="max-h-[400px] w-full object-contain p-8"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <span className="mb-3 w-fit rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            {category}
          </span>

          {/* Product Name */}
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            {name}
          </h1>

          {/* Rating */}
          <div className="mb-5 flex items-center gap-2">
            <span className="text-lg text-yellow-500">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="text-gray-600">
              {rating} Rating
            </span>
          </div>

          {/* Price */}
          <p className="mb-5 text-3xl font-bold text-blue-600">
            ${price}
          </p>

          {/* Description */}
          <p className="mb-8 text-base leading-7 text-gray-600">
            {description}
          </p>

          {/* Quantity */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-semibold text-gray-700">
              Quantity:
            </span>

            <div className="flex items-center rounded-lg border">
              <button className="px-4 py-2 text-xl hover:bg-gray-100">
                -
              </button>

              <span className="border-x px-5 py-2">
                1
              </span>

              <button className="px-4 py-2 text-xl hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Add to Cart
            </button>

            <button className="rounded-lg border-2 border-blue-500 px-6 py-3 font-semibold text-blue-500 transition hover:bg-blue-500 hover:text-white">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;