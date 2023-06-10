import videoBg from '../assets/bg.webm';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
        {/* <div className='overlay'></div> */}
        <video autoPlay muted loop className="video">
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo