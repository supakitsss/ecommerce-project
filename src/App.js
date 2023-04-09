function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky z-50 bg-gray-100 top-0 p-1 ">
        <ul className="flex text-xs lg:flex-row-reverse lg:space-x-8 lg:mt-0 lg:mr-48">
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">เปลี่ยนภาษา</a>
          </li>
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400 mr-8">SINGNUP</a>
          </li>
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">LOGIN</a>
          </li>
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">TRACK MY ORDER</a>
          </li>
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">CUSTOMER CARE</a>
          </li>
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-blue-900 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">SELL ON LAZADA</a>
          </li>
          <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-blue-900 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400" aria-current="page">SAVE MORE ON APP</a>
          </li>
        </ul>
      </header>
      
      <div className="flex-grow ">
        <main>
          <div className="flex flex-row bg-white p-5 ml-44">
            <div className="w-32 mr-16">
              {/* <img src={require('./images/lazada-logo.png')} alt="Lazada Logo" /> */}
              <img src="//laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" alt="Lazada Logo" /> 
            </div>
            <div class="mb-3 w-6/12 mr-8">
              <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-gray-400"
              placeholder="Search in Lazada"
              aria-label="Search"
              aria-describedby="button-addon1" />

            <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="orange"
                    class="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              </div>
              <div className="w-7 mr-14 mt-2">
                <img src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png" alt="cart Logo" />

            </div>
            <div className="w-44">
              {/* <img src={require('./images/lazada-logo.png')} alt="Lazada Logo" /> */}
              <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg" alt="Special for New user" /> 
            </div>
              </div>
              {/* h-344 */}
              
            <div class="card rounded-none w-full h-80">
              
                <img className="ml-96 w-3/5" src={require('./images/card.png')} alt="Card" />
              </div>
              <ul className="textincard text-sm bg-white p-5 w-52 ml-48">
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Electronic Devices</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400 mr-8">Electronic Accessories</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Tv & Home Appliances</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Health & Beauty</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Babies & Toys</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Groceries & Pets</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Home & Lifestyle</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Women's Fashion & Accessories</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Men's Fashion & Accessories</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400 ">Kid's Fashion & Accessories</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Sports & Travel</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-orange-400">Automotive & Motocycles</a>
                </li>
            </ul>
            <div className='flex flex-row lg:space-x-8 mt-5 ml-48'>
              <button class="rounded-full bg-gray-100 inline-flex font-bold w-48 items-center drop-shadow-md hover:drop-shadow-xl">
                <img className="w-8" src="https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png"></img>
                <a>LazMall</a>
              </button>
              <button class="rounded-full bg-gray-100 inline-flex font-bold w-48 items-center drop-shadow-md hover:drop-shadow-xl">
                <img className="w-8" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png"></img>
                <a>Vouchers</a>
              </button>
              <button class="rounded-full bg-gray-100 inline-flex font-bold w-48 items-center drop-shadow-md hover:drop-shadow-xl">
                <img className="w-8" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png"></img>
                <a>Top-up,Bills&Food</a>
              </button>
              <button class="rounded-full bg-gray-100 inline-flex font-bold w-48 items-center drop-shadow-md hover:drop-shadow-xl">
                <img className="w-8" src="https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png"></img>
                <a>LazBlog</a>
              </button>
              <button class="rounded-full bg-gray-100 inline-flex font-bold w-48 items-center drop-shadow-md hover:drop-shadow-xl">
                <img className="w-8" src="https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png"></img>
                <a>LazPick</a>
              </button>
            </div>
            <div className='text-2xl mt-9 ml-48'>Flash Sale</div>
            <div class="py-0 px-4 bg-gray-100 inline-flex ml-48">
              <div class="py-4 px-5 text-orange-400 mt-1">On Sale Now</div>
              <div class="py-4 px-5 text-black ml-20 mt-0">Ending in
                <div class="py-1 px-2 bg-red-600 text-white inline-flex ml-2"> 23 </div> <a> : </a>
                <div class="py-1 px-2 bg-red-600 text-white inline-flex"> 49 </div> <a> : </a>
                <div class="py-1 px-2 bg-red-600 text-white inline-flex"> 19 </div>
              </div>
              {/* <div class="py-4 px-5 bg-gray-300 ml-96">Shop</div> */}
              <button type="button" class="mt-2 ml-96 text-yellow-400 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900">SHOP ALL PRODUCT</button>
            </div>
        </main>
        <main class="ml-48 grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-4 sm:px-8 lg:mt-16 lg:grid-cols-5 lg:gap-x-5 lg:px-0 absolute top-3/4">
    <article class="relative h-48 w-48 ">
      <div class="aspect-square overflow-hidden">
        <img class="h-48 w-48 object-cover transition-all duration-300 group-hover:scale-125" src="https://lzd-img-global.slatic.net/g/p/29bda5543862bded7789025c158043ee.jpg_400x400q80.jpg_.webp" alt="" />
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div class="">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="text-sm font-normal text-black truncat">
             Lyo Hair Color Shampoo
            </a>
          </h3>
        </div>

        <div class="text-right">
          <p class="text-xs font-medium sm:text-sm md:text-base text-orange-600">฿35.00</p>
          <del class="mt-px text-xs font-thin text-gray-600 sm:text-sm"> ฿45.00</del>
          
        </div>
      </div>
    </article>

    <article class="relative h-48 w-48 ">
      <div class="aspect-square overflow-hidden">
        <img class="h-48 w-48 object-cover transition-all duration-300 group-hover:scale-125" src="	https://lzd-img-global.slatic.net/g/p/68d9aa43279a7508cf72ab70fc57d5f9.jpg_400x400q80.jpg_.webp" alt="" />
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div class="">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="text-sm font-normal text-black truncat">
              MK Vitamin Gummy
            </a>
          </h3>
        </div>

        <div class="text-right">
          <p class="text-xs font-medium sm:text-sm md:text-base text-orange-600">฿13.00</p>
          <del class="mt-px text-xs font-thin text-gray-600 sm:text-sm"> ฿29.00</del>
        </div>
      </div>
    </article>

    <article class="relative h-48 w-48 ">
      <div class="aspect-square overflow-hidden">
        <img class="h-48 w-48 object-cover transition-all duration-300 group-hover:scale-125" src="https://lzd-img-global.slatic.net/g/p/0602b62c66530652c0dc09c1f0023a8b.jpg_400x400q80.jpg_.webp" alt="" />
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div class="">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="text-sm font-normal text-black truncat">
              VFOODS วีฟู้ดส์ ขนมปังปี๊บจิ๋ว
            </a>
          </h3>
        </div>

        <div class="text-right">
          <p class="text-xs font-medium sm:text-sm md:text-base text-orange-600">฿59.00</p>
          <del class="mt-px text-xs font-thin text-gray-600 sm:text-sm"> ฿69.00</del>
        </div>
      </div>
    </article>

    <article class="relative h-48 w-48 ">
      <div class="aspect-square overflow-hidden">
        <img class="h-48 w-48 object-cover transition-all duration-300 group-hover:scale-125" src="https://lzd-img-global.slatic.net/g/p/8df972181bafd27dbb0b28e60b8bbaa5.jpg_400x400q80.jpg_.webp" alt="" />
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div class="">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="text-sm font-normal text-black truncat">
              หูฟัง TWS หูฟังบลูทูธ 
            </a>
          </h3>
        </div>
        <div class="text-right">
          <p class="text-xs font-medium sm:text-sm md:text-base text-orange-600">฿9.00</p>
          <del class="mt-px text-xs font-thin text-gray-600 sm:text-sm"> ฿152.00</del>
        </div>
      </div>
    </article>

    <article class="relative h-48 w-48 ">
      <div class="aspect-square overflow-hidden">
        <img class="h-48 w-48 object-cover transition-all duration-300 group-hover:scale-125" src="https://lzd-img-global.slatic.net/g/p/37556c62d63e35659a346b7ac04240f3.jpg_400x400q80.jpg_.webp" alt="" />
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div class="">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="text-sm font-normal text-black truncat">
            👒 รองเท้าแตะแบบสวม
            </a>
          </h3>
        </div>
        <div class="text-right">
          <p class="text-xs font-medium sm:text-sm md:text-base text-orange-600">฿35.00</p>
          <del class="mt-px text-xs font-thin text-gray-600 sm:text-sm"> ฿69.00</del>
        </div>
      </div>
    </article>
  </main>
</div>
<div class='flex flex-auto mt-80 w-10'>
    <img className="lazmall ml-48 absolute" src={require('./images/lazmall.JPG')} alt="Card" />
  </div>
  <div class='flex flex-auto mt-80 w-10'>
    <img className="lazmall ml-48 absolute" src={require('./images/categories.JPG')} alt="Card" />
  </div>
  <div class='flex flex-auto mt-80 w-10'>
    <img className="lazmall ml-48 absolute" src={require('./images/Jfy.JPG')} alt="Card" />
  </div>
  <div class='flex flex-auto mt-80 w-10'>
    <img className="lazmall ml-48 absolute" src={require('./images/cr.JPG')} alt="Card" />
  </div>
</div>
  )
}

export default App;
