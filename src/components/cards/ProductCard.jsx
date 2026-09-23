import Image from "next/image";
import Link from "next/link";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const { name, price, image, category, description, rating, _id } = product;
  // console.log("IMAGE URL:", image);
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category & Rating */}
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            {category}
          </span>

          <span className="text-sm font-semibold text-yellow-500">
            ⭐ {rating}
          </span>
        </div>

        {/* Name */}
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {name}
        </h2>

        {/* Description */}
        <p className="mb-4 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${price}
          </span>

          <CartButton product={product}></CartButton>

          <Link href={`/products/${_id}`} className="btn btn-primary btn-outline">
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;