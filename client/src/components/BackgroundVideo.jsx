import videoBg from '../assets/bg.webm';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
        {/* <div className='overlay'></div> */}
        <video autoPlay muted loop className="video" preload="auto" playsInline>
        <source src={videoBg} type="video/webm" />
      </video>
    </div>
  )
}

export default BackgroundVideo