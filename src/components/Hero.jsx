import { Component } from "react";
import { HoverCard, Portal } from "@ark-ui/react";
import IDimg from "../assets/image.png";

export class About extends Component {
  render() {
    return (
      <div>
        <div className='bg-base-300 rounded-box   '>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='h-auto'>
              <img src={IDimg} alt='ID' className='shadow-2xl h-45 ' />
              <div className='flex-row'>
                {" "}
                <p className='text-xs animate-bounce hover:pause '>
                  ↑ that`s me
                </p>
                <p className='text-xs ml-10 text-slate-500 '>
                  Picture by{" "}
                  <a
                    className='non-italic dark:text-white text-black underline decoration-sky-500/80 hover:text-sky-500 '
                    href='https://www.facebook.com/btogoblin?comment_id=Y29tbWVudDo1NDUzODY5NzIzMTM1NjJfNTQ1Mzg4OTYyMzEzMzYz'
                    target='blank'
                  >
                    Beto Ribeiro
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h1 className='text-5xl sm:text-7xl font-bold'>
                <p>
                  <br></br>
                  <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400'>
                    Developer.
                  </div>
                  <div className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                    Ilustrator.
                  </div>
                  Designer.<br></br>
                </p>
              </h1>
              <div className='tapudo'></div>
              <p className='pt-3 '>
                Hi there 👋, my name is
                <HoverCard.Root>
                  {" "}
                  <HoverCard.Trigger>David Carrijo</HoverCard.Trigger>
                  <Portal>
                    <HoverCard.Positioner>
                      <HoverCard.Content>
                        <HoverCard.Arrow>
                          <HoverCard.ArrowTip />
                        </HoverCard.Arrow>
                        <div className='h-auto text-[2px]  p-2 rounded thin bg-base-300 light:text-white'>
                          A awkward person, that like to <br></br>to read
                          HP.Lovecraft.🪐
                          <br></br>
                        </div>
                      </HoverCard.Content>
                    </HoverCard.Positioner>
                  </Portal>
                </HoverCard.Root>
              </p>
              <p className='pt-3'> </p>
              <p className='py-1 font-light'>
                I am currently available for freelance work.
                <br></br>I define myself as someone who is able to adapt to any
                situation and find the best way to solve complex and simple
                problems. And bring the best response and resolution to get a
                boost on the team.
              </p>
              <div className='flex gap-1 mb-2'>
                <button className='btn mt-3 hover:text-slate-400'>
                  <a
                    href='https://wa.me/+351930548674 '
                    target='_blank'
                    rel='Personal Whatzap'
                  >
                    {" "}
                    Contact-me <span className=' hover:animate-ping '>↗</span>
                  </a>
                </button>
              </div>
              <ul className='menu menu-horizontal bg-base-200 rounded-box ml-  lg:mt-3 '>
                <li>
                  <a href='http://www.github.com/davecarrijo' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7 hover:animate-spin '
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        // Github icon
                        d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='http://www.linkedin.com/davecarrijo' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7 hover:animate-spin '
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        // Linkedin Icon
                        d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='http://www.twitter.com/davecarrijo' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7 hover:animate-spin '
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1'
                        // Twitter Icon
                        d='M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='https://www.deviantart.com/waiolos' target='blank'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7 hover:animate-spin '
                      stroke='currentColor'
                      viewBox='0 0 50 50 '
                    >
                      <path
                        // Deviant art
                        d='M 37 13 L 29 28 L 37 28 L 37 38 L 23.699219 38 L 20 45 L 12 45 L 12 37 L 19.898438 22 L 12 22 L 12 12 L 25.199219 12 L 28.898438 5 L 37 5 C 37 7.667969 37 10.332031 37 13 Z M 30.105469 7 L 26.40625 14 L 14 14 L 14 20 L 21.996094 20 L 22.648438 21.078125 L 14 37.492188 L 14 43 L 18.796875 43 L 22.496094 36 L 35 36 L 35 30 L 26.902344 30 L 26.246094 28.910156 L 35 12.5 L 35 7 C 33.367188 7 31.738281 7 30.105469 7 Z'
                      ></path>{" "}
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
