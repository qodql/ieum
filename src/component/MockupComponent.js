import Image from 'next/image';

const MockupComponent = ({ children }) => {
  return (
    <div style={{ position: 'relative', Width: '417px', display:'flex', alignItems:'center', justifyContent:'center',}}>
      <Image
        src="/mockup.png"
        alt="Mobile App Mockup"
        width={439}
        height={852}
        style={{ border: 'none', backgroundColor:'transparent'}}
      />
      <div style={{ position: 'absolute', inset: '6% 0% 3%', overflow: 'auto', scrollbarWidth:'none'}}>
        {children}
      </div>
    </div>
  );
};

export default MockupComponent;
