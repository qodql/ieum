import Image from 'next/image';

const MockupComponent = ({ children }) => {
  return (
    <div style={{ position: 'relative', maxWidth: '390px', margin: '0 auto', display:'flex', alignItems:'center'}}>
      <Image
        src="/mockup.png"
        alt="Mobile App Mockup"
        width={390}
        height={844}
        style={{ border: 'none', backgroundColor:'transparent'}}
      />
      <div style={{ position: 'absolute', inset: '5% 21px 10%', overflow: 'auto', scrollbarWidth:'none'}}>
        {children}
      </div>
    </div>
  );
};

export default MockupComponent;
