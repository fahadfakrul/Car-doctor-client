import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({service}) => {
    const {title,img,price}= service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-52"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
        
        <div className="card-actions items-center">
        <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
        <button className="btn btn-circle text-[#FF3811]">
        <FaArrowRight />
</button>   
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
