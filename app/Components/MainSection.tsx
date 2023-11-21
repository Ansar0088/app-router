"use client";
import React from "react";
import { UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { BiSolidMessage } from "react-icons/bi";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import { InboxArrowDownIcon } from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { BiDotsVerticalRounded, BiSolidInbox } from "react-icons/bi";
import { MdExposureZero } from "react-icons/md";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
const MainSection = () => {
  return (
  
    <>
      <div className="bg-[#313338]  h-screen text-white  w-screen">
        <Tab.Group>
          <div>
            <div className="border-b  border-b-[#1E1F22] ">
              <Tab.List className="flex gap-8 pt-2 mb-2 px-1">
                <div className="flex gap-1 ">
                  <UserIcon className="w-5" />
                  <Tab className="text-gray-200    outline-none hover:bg-[#393C41] cursor-pointer rounded-md ">
                    Friends
                  </Tab>
                </div>
                <Tab className="text-[#D6DED7] outline-none hover:bg-[#393C41]  cursor-pointer rounded-md ">
                  Online
                </Tab>
                <Tab className="text-[#D6DED7] outline-none hover:bg-[#393C41]  cursor-pointer rounded-md ">
                  All
                </Tab>
                <Tab className="text-[#D6DED7] outline-none hover:bg-[#393C41]  cursor-pointer rounded-md ">
                  Pending
                </Tab>
                <div className="flex gap-2 items-center">
                  <Tab className="text-[#D6DED7] outline-none hover:bg-[#393C41]  cursor-pointer rounded-md ">
                    Suggestions
                  </Tab>
                  <Image
                    src="/Assets/six.png"
                    width={20}
                    height={10}
                    className="mt-1 "
                    alt="Picture of the author"
                  />
                </div>
                <Tab className="text-[#D6DED7] p-1 outline-none hover:bg-[#393C41]  cursor-pointer rounded-md ">
                  Blocked
                </Tab>
                <Tab className="bg-[#248046] p-1  outline-none  cursor-pointer rounded-md ">
                  Add friends
                </Tab>
              </Tab.List>
              <div className="divide-y divide-gray-400 hover:divide-y-8 "></div>
            </div>
          </div>

          <Tab.Panels className="mt-5">
            <Tab.Panel>
              <div>
                <p className="font-bold px-10 text-[#F2F3F5] ">ADD FRIEND</p>
                <p className="px-10 text-[#949BA4]">
                  you can add friend with their discord username
                </p>
                <div className=" border-b border-b-[#3F4147]">
                  <div className="flex justify-between m-5  items-center mt-5 bg-[#1E1F22] text-gray-500 p-2 rounded-md w-90%">
                    <p>you can add friend with their discord username</p>
                    <button className="bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Send Friend Request
                    </button>
                  </div>
                </div>
                <div className="flex justify-center  mt-20">
                  {" "}
                  <Image
                    src="/Assets/pen.png"
                    width={400}
                    height={20}
                    className="mt-1 "
                    alt="Picture of the author"
                  />{" "}
                </div>
                <p className="text-center text-[#949BA4]">
                  Wumpus show this main waiting on friends. You don’t have to though!
                </p>
              </div>
            </Tab.Panel>
            <Tab.Panel className="mt-5">
              <div className="flex justify-center mb-5">
                <input
                  type="text"
                  className=" bg-[#1E1F22] text-white px-3 w-[95%] rounded-sm p-1  outline-none"
                  placeholder="Search"
                />
              </div>
              <p className="mx-7 mb-2 text-sm font-[500] text-gray">
                ALL FRIENDS-2
              </p>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Ansar Ansari <br />
                    Online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9   h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />

              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av2.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Sara <br />
                    offline
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="mt-5 overflow-auto">
              <div className="flex justify-center mb-5 overflow-y-auto">
                <input
                  type="text"
                  className=" bg-[#1E1F22] text-white px-3 w-[90%] rounded-sm p-1  outline-none"
                  placeholder="Search"
                />
              </div>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl "
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Anish <br />
                    Online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9   h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av1.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Ansar Ansari <br />
                    Online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av2.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Sara <br />
                    offline
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Anish <br />
                    Online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av2.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Ansar Ansari <br />
                    Online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />

              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av2.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Laiba <br />
                    online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-9    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />
              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Ansar Ansari <br />
                    Online
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
              <div className=" mx-6    h-[1px] border-t-0 bg-[#50535c] opacity-100 dark:opacity-50" />

              <div className="flex items-center justify-between p-2 hover:bg-[#3f4147] cursor-pointer ml-5 mr-5 rounded-md">
                <div className="flex items-center">
                  <Image
                    src="/Assets/av2.png"
                    width={35}
                    height={30}
                    className="mx-5 rounded-2xl"
                    alt="Picture of the author"
                  />
                  <p className="font-[600] text-sm">
                    Sara <br />
                    offline
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiSolidMessage className="text-[#DBDEE1]" />
                  </div>
                  <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                    {" "}
                    <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="flex justify-center">
              <Image
                src="/Assets/last.png"
                width={400}
                height={30}
                alt="Picture of the author"
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      {/*  */}
      <div className="bg-[#313338] w-6/12 text-white h-screen border-l border-l-gray-700">
        {/* ICON DROPDOWN */}
        <div className="md:flex gap-5  p-1 hidden justify-end  mt-2 mb-5 border-b border-b-[#1E1F22] ">
          <Popover className="relative ">
            <Popover.Button>
              <ChatBubbleLeftRightIcon className="w-6 text-[#DBDEE1] cursor-pointer outline-none  mt-0.5" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute  right-5 outline-none">
                <div className="bg-[#313338] border border-gray-900 rounded-lg  w-96 p-3  ">
                  <p className="font-bold text-[#F2F3F5] text-lg ">
                    Select Friends
                  </p>
                  <p className="text-sm text-[#949BA4] mb-5">
                    You can add 9 more friends
                  </p>
                  <input
                    type="text"
                    className="bg-[#1E1F22] text-white  rounded-sm text-md w-[100%] p-2  outline-none"
                    placeholder="Type the user name of a friend"
                  />
                  <div className="border-b border-b-[#3F4147] pb-3 ">
                    <div className="flex items-center justify-between mt-5 hover:bg-[#4E50584C] cursor-pointer  rounded-md p-1">
                      <div className="flex items-center gap-2">
                        {" "}
                        <Image
                          src="/Assets/av.png"
                          width={40}
                          height={2}
                          className="mx-2 rounded-3xl"
                          alt="Picture of the author"
                        />
                        <p className="text-[#DBDEE1] font-bold">Sara</p>
                        <p className=" text-sm text-[#949BA4]">Kchra rani</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1 hover:bg-[#4E50584C] cursor-pointer  rounded-md p-1">
                      <div className="flex items-center gap-2">
                        {" "}
                        <Image
                          src="/Assets/av1.png"
                          width={40}
                          height={2}
                          className="mx-2 rounded-3xl"
                          alt="Picture of the author"
                        />
                        <p className="text-[#DBDEE1] font-bold">Ansar Akbar</p>
                        <p className=" text-sm text-[#949BA4]">Ansar Ali</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1 hover:bg-[#4E50584C] cursor-pointer  rounded-md p-1">
                      <div className="flex items-center gap-2">
                        {" "}
                        <Image
                          src="/Assets/av2.png"
                          width={40}
                          height={2}
                          className="mx-2 rounded-3xl"
                          alt="Picture of the author"
                        />
                        <p className="text-[#DBDEE1] font-bold">Afzal jnu</p>
                        <p className=" text-sm text-[#949BA4]">Ui designer</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#5865F2] w-full mt-3 hover:bg-blue-600 text-white font-[500] py-2 px-4 rounded">
                    Create DM
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* ICON DROPDOWN 2*/}
          <Popover className="relative ">
            <Popover.Button>
              <InboxArrowDownIcon className="w-6  text-[#DBDEE1] cursor-pointer mt-0.5" />{" "}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute  right-5 outline-none">
                <div className="bg-[#1E1F22] border border-gray-900 rounded-lg w-96 ">
                  <div className="p-4">
                    <div className="flex justify-between ">
                      <div className="flex gap-2">
                        {" "}
                        <BiSolidInbox style={{ fontSize: "30px" }} />
                        <p className="text-[#DBDEE1] font-[500] text-xl">
                          Inbox
                        </p>
                      </div>
                      <div>
                        <div className="flex  gap-2 items-center bg-[#303237] p-1 rounded-2xl">
                          <Image
                            src="/Assets/hand.png"
                            width={20}
                            height={2}
                            style={{ color: "white" }}
                            alt="Picture of the author"
                          />
                          <MdExposureZero
                            style={{
                              color: "#fff",
                              backgroundColor: "#453F45",
                              borderRadius: "20px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex gap-5">
                        <p className="text-[#949BA4] p-0.5 hover:bg-[#393C41]  cursor-pointer rounded-md hover:text-white ">
                          For you
                        </p>
                        <p className="text-[#949BA4] p-0.5 hover:bg-[#393C41]  cursor-pointer rounded-md hover:text-white">
                          Unreads
                        </p>
                        <p className="text-[#949BA4] p-0.5 hover:bg-[#393C41]  cursor-pointer rounded-md hover:text-white">
                          Mentions
                        </p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 bg-[#282A2E] p-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/Assets/av2.png"
                        width={35}
                        height={10}
                        className="rounded-3xl "
                        alt="Picture of the author"
                      />
                      <p className="text-[#DBDEE1] font-bold">Ansar ansari </p>
                      <p className=" text-sm text-[#949BA4]">
                        has accepted your friend request.
                      </p>
                    </div>
                    <div>
                      <div className=" bg-[#1E1F22] p-3 rounded-3xl">
                        {" "}
                        <BiDotsVerticalRounded className="text-[#DBDEE1]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <QuestionMarkCircleIcon className="w-6 text-green-600 mb-1" />
        </div>
        <p className="font-bold text-[#F2F3F5] p-2">ACTIVE NOW</p>
        <div className="text-center">
          <p className="p-2 text-[#F2F3F5] text-sm font-bold">
            its quiet for now...
          </p>
          <p className="p-2 text-sm text-[#949BA4]">
            When a friend starts an activity—like playing a game or hanging out
            on voice—we’ll show it here!
          </p>
        </div>
      </div>
    </>
  );
};

export default MainSection;
