import Image from 'next/image';

const MockupComponent = ({ children }) => {
  return (
    <div style={{ position: 'relative', display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
       <div style={{ minWidth: '439px', overflow:'hidden'}}>
        <Image
          src="/mockup.png"
          alt="Mobile App Mockup"
          width={439}
          height={900}
          style={{ border: 'none', backgroundColor:'transparent'}}
        />
      </div>
      <div style={{ position: 'absolute', inset: '6% 0% 3%', overflow: 'auto', scrollbarWidth:'none', maxHeight:'844px', padding:'100px 0'}}>
        {children}
      </div> 
    </div>
  );
};

export default MockupComponent;
