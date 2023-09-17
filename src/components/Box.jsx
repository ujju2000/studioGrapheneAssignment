

export default function Box(props) {
    
    const {image , price, description , title} = props.product;
  return (
    <div key  = {props.index} className="h-[500px] w-1/3 box flex flex-col">
                <div className = 'p-1'><img src= {image} alt="" className = 'h-[200px] w-[200px] object-contain'/></div>
                <div className = ''>
                  <h4 className = 'font-semibold uppercase text-[20px] '>
                    {title}
                  </h4>
                  <p className = 'text-[14px] text-justify'>
                    {description}
                  </p>
                  <span className = 'text-[26px] font-WorkSans mt-2'>
                    ${price}
                  </span>
                </div>
              </div>
  )
}
