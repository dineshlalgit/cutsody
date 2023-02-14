import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from 'react-modal';

const MensCover = (props) => {
  const [openMensMenuDetails, setOpenMensMenuDetails] = useState(false);

  return (
    <div className="m-2 flex w-60 flex-col p-2 py-3">
      <div
        onClick={() => {
          setOpenMensMenuDetails(!openMensMenuDetails);
        }}
        className="max-w-60 items:center justify-center"
      >
        <LazyLoadImage
          src={props.imageLink}
          alt={props.name}
          className="transition:origin-center transition:duration-1000 flex h-60 w-60 rounded-md shadow-lg shadow-black drop-shadow-2xl transition-transform hover:scale-110 hover:ease-in-out"
        />
      </div>
      <div className="m-auto flex flex-col justify-between p-1 py-3 text-center">
        <p className="text-slate-900 hover:font-semibold hover:text-slate-50">{props.name}</p>
        <p className='text-slate-900 hover:font-semibold hover:text-slate-50'>{props.duration}</p>
        <p>{props.description}</p>
      </div>
      {/* <TravelPackagePage2 /> */}

      <Modal
        isOpen={openMensMenuDetails}
        onRequestClose={() => setOpenMensMenuDetails(false)}
        overlayClassName="" // modal-overlay bg-black opacity
        className="" // modal-content w-auto h-auto
      >
        <div className="my-10 flex h-auto w-auto flex-col bg-slate-50 font-Nunito_Sans shadow-2xl shadow-slate-200">
          <div className="mx-auto">
            <span className="text-3xl font-semibold text-slate-900">
              Category Details
            </span>
          </div>
          <div className="mx-4 flex flex-row justify-between py-3">
            <span className="text- text-2xl font-semibold text-black">
              {props.name}
            </span>
            <button
              className="h-10 border-2 border-solid px-2 font-Nunito_Sans text-2xl font-medium text-slate-400 hover:text-slate-800"
              onClick={() => setOpenMensMenuDetails(false)}
            >
              X
            </button>
          </div>
          <div className="py-2">
            <span className="text-base text-slate-700">{props.value1}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-52 sm:w-auto'
              src={props.imageLink1 ? props.imageLink1 : '-'}
              alt='.'
            /> */}
          </div>
          <div className="py-3">
            <span className="text-base text-slate-700">{props.value2}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink2 ? props.imageLink2 : '-'}
              alt='.'
            /> */}
          </div>
          <div className="py-3">
            <span className="text-base text-slate-700">{props.value3}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink3 ? props.imageLink3 : '-'}
              alt='.'
            /> */}
          </div>
          <div className="py-3">
            <span className="text-base text-slate-700">{props.value4}</span>
            {/* <LazyLoadImage
              className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
              src={props.imageLink4 ? props.imageLink4 : '-'}
              alt='.'
            /> */}
          </div>
          {props.value5 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value5}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink5 ? props.imageLink5 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value6 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value6}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink6 ? props.imageLink6 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value7 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value7}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink7 ? props.imageLink7 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value8 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value8}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink8 ? props.imageLink8 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value9 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value9}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink9 ? props.imageLink9 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value10 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value10}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink10 ? props.imageLink10 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value11 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value11}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink11 ? props.imageLink11 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value12 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value12}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink12 ? props.imageLink12 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value13 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value13}</span>
              {/* <LazyLoadImage
                className='h-80 w-1/3 lg:w-5/12 airbnbml:w-2/3 airbnbml:mx-auto sm:h-40'
                src={props.imageLink13 ? props.imageLink13 : '-'}
                alt='.'
              /> */}
            </div>
          ) : (
            <div></div>
          )}
          {props.value14 ? (
            <div className="py-3">
              <span className="text-base text-slate-700">{props.value14}</span>
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
              onClick={() => setOpenMensMenuDetails(false)}
            >
              Back
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MensCover;
