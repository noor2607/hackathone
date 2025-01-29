export default function Footersection(){
    return (
        <footer className="bg-white py-8 w-full">
        <div className="max-w-7xl  px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {/* Column 1 */}
          <div className="text-left ">
            <h3 className="font-bold mb-4 ">Icons</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="text-left">
            <h3 className="font-bold mb-4">Kids</h3>
            <ul className="space-y-2 text-[15px] font-[500px] text-[#757575]">
              <li>Infant & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-sm mt-8">
          {/* Social Icons */}
          <div className="flex space-x-6 text-xl">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

        </div>
      </footer>
    )
} 