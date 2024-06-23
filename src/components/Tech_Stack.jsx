import React, { Component } from "react";
import { HoverCard, Portal } from "@ark-ui/react";

export class Tech_Stack extends Component {
  render() {
    return (
      <div className=' border-slate-600 mt-2 mb-2 '>
        <div className='Tech_Container'>
          {" "}
          <div className=' bg-base-300 rounded-box mt-2 p-2 pb-5 mb-3'>
            <span className='  mt-2 flex justify-center  font-bold'>
              I build with ↓
            </span>
            <div className='     '>
              <div className='grid grid-rows-2  justify-center sm:flex  '>
                <div align='center' className='  flex  lg:flex  mt-2 gap-2'>
                  <code>
                    <img
                      width='50'
                      src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'
                      alt='Git'
                      title='Git'
                      className='  hover:animate-bounce'
                    />
                  </code>
                  <code>
                    <img
                      width='50'
                      src='https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/258326081-b113a23c-5c04-45aa-819c-bd04e8ac2a37.png'
                      alt='Neovim'
                      title='Neovim'
                      className=' hover:animate-bounce '
                    />
                  </code>
                  <code>
                    <img
                      width='50'
                      src='https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png'
                      alt='Tailwind CSS'
                      title='Tailwind CSS'
                      className=' hover:animate-bounce'
                    />
                  </code>
                  <code>
                    <img
                      width='50'
                      src='https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
                      alt='React'
                      title='React'
                      className=' hover:animate-bounce'
                    />
                  </code>
                </div>
                <div align='center' className='  flex  lg:flex  mt-2 gap-2'>
                  <code>
                    <img
                      width='50'
                      src='https://github.com/marwin1991/profile-technology-icons/assets/136815194/7e9599e9-0570-4bb6-b17f-676ed589912f'
                      alt='Bun.js'
                      title='Bun.js'
                      className=' hover:animate-bounce'
                    />
                  </code>
                  <code>
                    <img
                      width='50'
                      src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'
                      alt='Node.js'
                      title='Node.js'
                      className=' hover:animate-bounce'
                    />
                  </code>
                  <code>
                    <img
                      width='50'
                      src='https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png'
                      alt='Vite'
                      title='Vite'
                      className=' hover:animate-bounce'
                    />
                  </code>
                  <code>
                    <img
                      width='50'
                      src='https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png'
                      alt='mongoDB'
                      title='mongoDB'
                      className='bg-white hover:animate-bounce '
                    />
                  </code>
                </div>
                <span className='ml-3 flex justify-center'>
                  <HoverCard.Root>
                    <HoverCard.Trigger>Learning ✋🏻↓</HoverCard.Trigger>
                    {""}
                    <Portal>
                      <HoverCard.Positioner>
                        <HoverCard.Content>
                          <HoverCard.Arrow>
                            <HoverCard.ArrowTip />
                          </HoverCard.Arrow>
                          <div className='h-auto text-[2px]  p-2 rounded-box thin bg-base-300'>
                            <div
                              align='center'
                              className='flex gap-3 mt-2 rounded align-middle'
                            >
                              <code>
                                <img
                                  width='30'
                                  src='https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png'
                                  alt='Java'
                                  title='Java'
                                  className=' hover:animate-bounce'
                                />
                              </code>
                              <code>
                                <img
                                  width='30'
                                  src='https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png'
                                  alt='Spring'
                                  title='Spring'
                                  className=' hover:animate-bounce'
                                />
                              </code>
                              <code>
                                <img
                                  width='30'
                                  src='https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png'
                                  alt='Python'
                                  title='Python'
                                  className=' hover:animate-bounce'
                                />
                              </code>
                              <code>
                                <img
                                  width='30'
                                  src='https://user-images.githubusercontent.com/25181517/184117132-9e89a93b-65fb-47c3-91e7-7d0f99e7c066.png'
                                  alt='pytest'
                                  title='pytest'
                                  className=' hover:animate-bounce'
                                />
                              </code>
                              <code>
                                <img
                                  width='30'
                                  src='https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4'
                                  alt='Django'
                                  title='Django'
                                  className=' hover:animate-bounce'
                                />
                              </code>
                            </div>
                            <br></br>
                          </div>
                        </HoverCard.Content>
                      </HoverCard.Positioner>
                    </Portal>
                  </HoverCard.Root>
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
        {/* <div className='flex'>
          <span className='flex w-3 h-3 me-3 bg-gray-500 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-gray-200 rounded-full dark:bg-gray-700'></span>
          <span className='flex w-3 h-3 me-3 bg-blue-300 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-green-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-red-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-purple-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-indigo-200 rounded-full'></span>
          <span className='flex w-3 h-3 me-3 bg-yellow-300 rounded-full'></span>
          <span className='flex w-3 h-3 me-3  bg-gradient-to-r from-yellow-200 bg-teal-100 ...  rounded-full'></span>
        </div> */}
      </div>
    );
  }
}

export default Tech_Stack;
