"use client";
import { useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { BsShopWindow } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const TabsRoute = () => {
  let [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div
        className="flex flex-col justify-between bg-[#2B2D31]"
      >
        <div>
          <div
            className="border-b border-b-[#1E1F22] p-0.5 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <p className="bg-[#1E1F22] text-white px-3 rounded-md text-sm w-56 p-1 m-2 outline-none">
              {" "}
              Find and start conversion 
            </p>
          </div>

          <div className="modal">
            <div className="modal-content">
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                style={{ border: "1px solid gray" }}
                className="fixed inset-0 bg-black/80 flex w-screen items-center justify-center p-4 overflow-y-auto"
                aria-hidden="true"
              >
                <Dialog.Panel className="mx-auto max-w-lg rounded  bg-[#2B2D31]  shadow-lg w-screen ">
                  <Dialog.Description>
                    <div className="p-2">
                      <div className="p-2">
                        <input
                          type="text"
                          className=" bg-[#1E1F22] text-white px-3 text-xl w-full rounded-sm p-5  outline-none"
                          placeholder="Where Whouid you like to go?"
                        />
                        <div className="p-3 mt-3">
                          <p className="text-gray-200 font-[600] text-xs pt-2 ">
                            PREVIOUS CHANNELS
                          </p>
                          <div className="flex justify-between hover:bg-[#3f4147] cursor-pointer p-1 rounded-md">
                            <div className="flex gap-2  items-center">
                              <p className="text-[#B5BAC1]"># announcements</p>
                              <p className="text-[#949BA4] text-xs">
                                HR DEPARTMENT
                              </p>
                            </div>
                            <div>
                              <p className="text-[#B5BAC1]">Fillnix Solution</p>
                            </div>
                          </div>
                          <div className="flex justify-between hover:bg-[#3f4147] cursor-pointer p-1 rounded-md">
                            <div className="flex gap-1  items-center ">
                              <Image
                                src="/Assets/av1.png"
                                width={20}
                                height={2}
                                className="rounded-2xl"
                                alt="Picture of the author"
                              />
                              <p className="text-[#B5BAC1]">Akbar-</p>
                              <p className="text-[#949BA4] text-xs">
                                Akbaransari
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between hover:bg-[#3f4147] cursor-pointer p-1 rounded-md">
                            <div className="flex gap-1  items-center ">
                              <Image
                                src="/Assets/av.png"
                                width={20}
                                height={2}
                                className=" rounded-2xl"
                                alt="Picture of the author"
                              />
                              <p className="text-[#B5BAC1]">Fatima-</p>
                              <p className="text-[#949BA4] text-xs">ansari</p>
                            </div>
                          </div>
                          <p className="text-[#B5BAC1] text-sm font-[500] p-1">
                            MENTIONS
                          </p>
                          <div className="flex justify-between hover:bg-[#3f4147] cursor-pointer p-1 rounded-md">
                            <div className="flex gap-2  items-center">
                              <p className="text-white">
                                #「🛒」ꜱʜᴏᴘ{" "}
                                <span className="bg-[#F23F42] rounded-md p-1">
                                  9
                                </span>
                              </p>
                              <p className="text-[#949BA4] text-xs">
                                ╰─│☆☆☆│➢ ・𝗜𝗡𝗙𝗢
                              </p>
                            </div>
                            <div>
                              <p className="text-[#B5BAC1]">999</p>
                            </div>
                          </div>
                          <div className="flex justify-between hover:bg-[#3f4147] cursor-pointer p-1 rounded-md">
                            <div className="flex gap-2  items-center">
                              <p className="text-white">
                                #「⛅」ᴀɪ-ᴀʀᴛ-ɢᴇɴ{" "}
                                <span className="bg-[#F23F42] rounded-md p-1">
                                  1
                                </span>
                              </p>
                              <p className="text-[#949BA4] text-xs">
                                ╰─│☆☆☆│➢ ・𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬
                              </p>
                            </div>
                            <div>
                              <p className="text-[#B5BAC1]">999</p>
                            </div>
                          </div>
                        </div>

                        {/* <AiFillCloseCircle className="text-white" /> */}
                      </div>
                    </div>
                  </Dialog.Description>
                </Dialog.Panel>
              </Dialog> 
            </div>
          </div>
           <Link href="MainSection">
          <div className="bg-[#414246] flex items-center gap-1 text-white  w-56 rounded-md p-2 m-2 outline-none">
            <Image
              src="/Assets/bs.png"
              width={30}
              height={2}
              className="mx-2"
              alt="Picture of the author"
            />

            <p className="text-[#DBDEE1]">Friends</p>
          </div>
          </Link>
          <Link href="">
          <div className={`flex gap-3 mx-2  p-2 hover:bg-[#35373C] group cursor-pointer  rounded-md  [&.active]:bg-black/90 dark:[&.active]`}>
            <svg
              className="linkButtonIcon-7rsZcu group-hover:text-[#DBDEE1]"
              aria-hidden="true"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#949BA4"
                d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
              ></path>
            </svg>
            <p className="text-[#949BA4] group-hover:text-[#DBDEE1]">Nitro</p>
           
          </div>
          </Link>
          <div className="flex gap-4 mx-2 p-2 align-center group hover:bg-[#35373C] cursor-pointer rounded-md ">
            <BsShopWindow className="text-[#949BA4] text-xl group-hover:text-[#DBDEE1]" />
            <p className="text-[#949BA4] group-hover:text-[#DBDEE1]">Shop</p>
          </div>
          <div className="text-[#fff] flex justify-between mt-5 m-3">
            <p className="text-xs font-bold text-[#949BA4]">DIRECT MESSAGES</p>
            <PlusIcon className="w-5 text-[#949BA4]" />
          </div>
        </div>
        <div>
          <div className="flex  gap-5 items-center bg-[#232428] p-2 relative">
            <div className="flex items-center">
              <Image
                src="/Assets/lg.png"
                width={40}
                height={2}
                className="mx-2 rounded-3xl"
                alt="Picture of the author"
              />
               <div className="text-center mt-2">
              <p className="text-white leading-3 text-sm font-[500]">
                Ansar Ans
              </p>
              <p className="text-white text-sm font-[100]">ansaransari</p>
            </div>
            </div>
           
            <div className="flex gap-2 mt-2">
              <SpeakerXMarkIcon className="w-5 text-white" />
              <MusicalNoteIcon className="w-5 text-white" />
              <Cog8ToothIcon className="w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsRoute;
