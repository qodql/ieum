import Image from 'next/image';

const MockupComponent = ({ children }) => {
  return (
    <div style={{ position: 'relative', display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
        <Image
          src="/mockup.png"
          alt="Mockup"
          width={438}
          height={900}
          style={{ border: 'none', backgroundColor:'transparent', position:'absolute', zIndex:'3',pointerEvents:'none'}}
          priority
        />
      <div style={{ position: 'relative',  overflow: 'hidden',  height:'900px', width:'390px'}}>
        {children}
      </div> 
    </div>
  );
};

export default MockupComponent;
