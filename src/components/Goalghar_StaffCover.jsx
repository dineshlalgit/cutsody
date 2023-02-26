import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-modal';

const Goalghar_StaffCover = (props) => {
  const [openWomensMenuDetails, setOpenWomensMenuDetails] = useState(false);

  return (
    <div className="mx-10 flex w-80 flex-col p-2 py-3 border-4 rounded-lg border-red-100">
      <div
        onClick={() => {
          setOpenWomensMenuDetails(!openWomensMenuDetails);
        }}
        className="max-w-80 items:center justify-center"
      >
        <LazyLoadImage
          src={props.imageLink}
          alt={props.staffName}
          className="transition:origin-center transition:duration-1000 flex h-60 w-80 transition-transform hover:scale-110 hover:ease-in-out rounded-t-lg rounded-b-sm border-2 border-solid border-r-amber-200/50 border-l-amber-200/50 border-t-amber-200/50"
        />
      </div>
      <div className="m-auto flex flex-col bg-rose-100 justify-between p-1 py-3 text-center border-2 border-solid border-b-amber-200/50 border-r-amber-200/50 border-l-amber-200/50 w-full h-auto rounded-b-lg">
        <p className="font-semibold hover:text-blue-500 hover:text-xl text-blue-900">
          {props.category}
        </p>
        <p className="font-semibold hover:text-blue-500 hover:text-xl text-blue-900">
          {props.staffName}
        </p>
      </div>
      {/* <TravelPackagePage2 /> */}

      <Modal
        isOpen={openWomensMenuDetails}
        onRequestClose={() => setOpenWomensMenuDetails(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="my-10 flex h-auto w-auto flex-col bg-slate-50 font-Nunito_Sans shadow-2xl shadow-slate-200">
          <div className="mx-4 flex flex-row justify-between py-3">
            <span className="py-2 text-2xl font-semibold text-slate-900">
              Details
            </span>
            <button
              className="h-10 border-2 border-solid px-2 font-Nunito_Sans text-xl font-medium text-slate-400 hover:text-slate-800"
              onClick={() => setOpenWomensMenuDetails(false)}
            >
              X
            </button>
          </div>
          <div className="mx-auto mb-5 flex gap-4 md:flex-col">
            <p className="mx-auto font-mono text-5xl font-semibold text-black xs:text-2xl">
              {props.staffName}'s
            </p>
            <p className="mx-auto font-mono text-5xl font-semibold text-black xs:text-2xl">
              Expertise
            </p>
          </div>
          <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
            <span className="text-base text-slate-700">{props.expertise1}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-52 sm:w-auto'
              src={props.imageLink1 ? props.imageLink1 : '-'}
              alt='.'
            /> */}
          </div>
          <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
            <span className="text-base text-slate-700">{props.expertise2}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink2 ? props.imageLink2 : '-'}
              alt='.'
            /> */}
          </div>
          <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
            <span className="text-base text-slate-700">{props.expertise3}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink3 ? props.imageLink3 : '-'}
              alt='.'
            /> */}
          </div>
          <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
            <span className="text-base text-slate-700">{props.expertise4}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink4 ? props.imageLink4 : '-'}
              alt='.'
            /> */}
          </div>
          {props.expertise5 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise5}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink5 ? props.imageLink5 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise6 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise6}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink6 ? props.imageLink6 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise7 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise7}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink7 ? props.imageLink7 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise8 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise8}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink8 ? props.imageLink8 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise9 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise9}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink9 ? props.imageLink9 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise10 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise10}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink10 ? props.imageLink10 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise11 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise11}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink11 ? props.imageLink11 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise12 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise12}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink12 ? props.imageLink12 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise13 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise13}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink13 ? props.imageLink13 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.expertise14 ? (
            <div className="mx-auto py-3 font-Roboto_Condensed text-lg text-slate-700">
              <span className="text-base text-slate-700">{props.expertise14}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink14 ? props.imageLink14 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          <div className="mx-auto pt-10 pb-7">
            <button
              className="mx-auto h-10 w-20 rounded-lg border-2 bg-rose-600 font-Nunito_Sans uppercase text-slate-100 hover:bg-gradient-to-br hover:from-red-600 hover:via-red-500 hover:to-yellow-400"
              onClick={() => setOpenWomensMenuDetails(false)}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Goalghar_StaffCover;
