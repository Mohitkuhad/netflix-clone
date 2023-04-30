import React from "react";
import GetStartedHeader from "../../Components/GetStartedHeader";
import SmallFooter from "../../Components/SmallFooter";
import { Link } from "react-router-dom";

function Signup4() {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <GetStartedHeader />
        <div className="w-10/12 flex flex-col gap-5 mt-[20vh]">
          <p>
            STEP
            <span className="font-bold"> 2</span> OF
            <span className="font-bold"> 3</span>
          </p>
          <h1 className="text-3xl font-bold">
            Choose the plan that's right for you
          </h1>
          <div className="flex gap-3 items-center">
            <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682547170/NetflixClone/Get%20Started/tick_leexrd.png" />
            <p>Watch all you want. Ad-free.</p>
          </div>

          <div className="flex gap-3 items-center">
            <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682547170/NetflixClone/Get%20Started/tick_leexrd.png" />
            <p>Recommendations just for you.</p>
          </div>

          <div className="flex gap-3 items-center">
            <img src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1682547170/NetflixClone/Get%20Started/tick_leexrd.png" />
            <p>Change or cancel your plan anytime.</p>
          </div>
        </div>

        <div className="w-10/12 flex flex-col gap-1 md:gap-5 p-5 md:p-10">
          <div className="w-full flex md:flex-row flex-col justify-end">
            <div className="w-2/4 h-28 flex gap-10">
              <div className="h-full md:w-28 flex justify-center items-center bg-netflixRed text-white md:text-xl font-semibold opacity-60">
                <h1>Mobile</h1>
              </div>
              <div className="h-full md:w-28 flex justify-center items-center bg-netflixRed text-white md:text-xl font-semibold">
                <h1>Basic</h1>
              </div>
              <div className="h-full md:w-28 flex justify-center items-center bg-netflixRed text-white md:text-xl font-semibold opacity-60">
                <h1>Standard</h1>
              </div>
              <div className="h-full md:w-28 flex justify-center items-center bg-netflixRed text-white md:text-xl font-semibold opacity-60">
                <h1>Premium</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            {/*----------Monthly Price----------*/}
            <div className="w-full h-14 flex md:flex-row flex-col border-b">
              <p className="w-2/4 flex items-center">Monthly Price</p>
              <div className="flex gap-10">
                <p className="w-28 flex justify-center items-center">₹199</p>
                <p className="w-28 flex justify-center items-center text-netflixRed">
                  ₹199
                </p>
                <p className="w-28 flex justify-center items-center">₹199</p>
                <p className="w-28 flex justify-center items-center">₹199</p>
              </div>
            </div>

            {/*----------Video Quality----------*/}
            <div className="w-full h-14 flex md:flex-row flex-col border-b">
              <p className="w-2/4 flex items-center">Video Quality</p>
              <div className="flex gap-10">
                <p className="w-28 flex justify-center items-center">Good</p>
                <p className="w-28 flex justify-center items-center text-netflixRed">
                  Good
                </p>
                <p className="w-28 flex justify-center items-center">Better</p>
                <p className="w-28 flex justify-center items-center">Best</p>
              </div>
            </div>

            {/*----------Resolution----------*/}
            <div className="w-full h-14 flex md:flex-row flex-col border-b">
              <p className="w-2/4 flex items-center">Resolution</p>
              <div className="flex gap-10">
                <p className="w-28 flex justify-center items-center">480p</p>
                <p className="w-28 flex justify-center items-center text-netflixRed">
                  720p
                </p>
                <p className="w-28 flex justify-center items-center">1080p</p>
                <p className="w-28 flex justify-center items-center">4k+HDR</p>
              </div>
            </div>

            {/*----------Phone----------*/}
            <div className="w-full h-14 flex  md:flex-row flex-col">
              <p className="w-2/4 flex items-center  md:flex-row flex-col">
                Devices you can use to watch
              </p>

              <div className="flex md:gap-10  md:flex-row flex-col">
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Phone"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Phone</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center text-netflixRed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Phone"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Phone</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Phone"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Phone</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Phone"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Phone</p>
                </div>
              </div>
            </div>

            {/*----------Tablet----------*/}
            <div className="w-full h-14 flex">
              <p className="w-2/4 flex items-center"></p>
              <div className="flex gap-10">
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tablet"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Tablet</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center text-netflixRed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tablet"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Tablet</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tablet"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Tablet</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tablet"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Tablet</p>
                </div>
              </div>
            </div>

            {/*----------Computer----------*/}
            <div className="w-full h-14 flex">
              <p className="w-2/4 flex items-center"></p>
              <div className="flex gap-10">
                <div className="w-28 flex flex-col justify-center items-center"></div>
                <div className="w-28 flex flex-col justify-center items-center text-netflixRed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Laptop"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Computer</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Laptop"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Computer</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Laptop"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">Computer</p>
                </div>
              </div>
            </div>

            {/*----------TV----------*/}
            <div className="w-full h-14 flex mb-10">
              <p className="w-2/4 flex items-center"></p>
              <div className="flex gap-10">
                <div className="w-28 flex flex-col justify-center items-center"></div>
                <div className="w-28 flex flex-col justify-center items-center text-netflixRed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tv"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">TV</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tv"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">TV</p>
                </div>
                <div className="w-28 flex flex-col justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="planGrid__supportedDevicesIcon"
                    data-name="Tv"
                    focusable="false"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="text-sm font-bold">TV</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-lightgrey">
              Phone Tablet Phone Tablet Computer TV Phone Tablet Computer TV
              Phone Tablet Computer TV HD (720p), Full HD (1080p), Ultra HD (4K)
              and HDR availability subject to your internet service and device
              capabilities. Not all content is available in all resolutions. See
              our Terms of Use for more details.
              <br />
              <br />
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </p>
          </div>
            <Link to="/signup/payment" className="flex w-full justify-center items-center text-white">
              <button className="w-2/6 h-14 bg-netflixRed rounded text-2xl">
                Next
              </button>
            </Link>
        </div>
      </div>
      <SmallFooter />
    </>
  );
}

export default Signup4;
