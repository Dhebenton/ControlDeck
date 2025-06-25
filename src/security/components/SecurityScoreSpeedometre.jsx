import { useState, useEffect } from 'react';

const SecurityScoreSpeedometre = ({ score }) => {
  const [rotation, setRotation] = useState(190);

  useEffect(() => {
    const targetRotation = 190 - (score / 100) * -169;
    const timeout = setTimeout(() => setRotation(targetRotation), 50);
    return () => clearTimeout(timeout);
  }, [score]);

  const getGradientId = (score) => {
    if (score < 19) return 'gradientRed';
    if (score < 53) return 'gradientYellow';
    if (score < 88) return 'gradientGreen';
    return 'gradientDarkGreen';
  };
  
  return (
<div className="speedometre-wholewrap">
  <div className="speedometre-background">
    <svg width="100%" height="auto" viewBox="0 0 454 232" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M112.416 112.416C82.497 142.335 65.4856 187.596 64.9662 230.002C64.9527 231.107 64.0585 232 62.954 232H11.0002C9.89565 232 8.99922 231.106 9.00978 230.002C9.55454 173.058 33.3334 113.782 73.5581 73.5578C114.253 32.8624 169.448 10 227 10C284.552 10 339.747 32.8625 380.442 73.5578C420.667 113.782 444.446 173.058 444.991 230.002C445.001 231.106 444.105 232 443 232H391.046C389.942 232 389.048 231.107 389.034 230.002C388.515 187.596 371.503 142.335 341.584 112.416C311.195 82.0265 269.978 64.9538 227 64.9538C184.023 64.9538 142.806 82.0264 112.416 112.416Z" fill="url(#paint0_linear_42_597)" fillOpacity="0.08"/>
      <path d="M47.8726 91.6724C46.9913 91.0066 45.7358 91.1815 45.0777 92.0687C16.5547 130.525 0.951414 177.033 0.509852 224.91C0.499665 226.014 1.39566 226.911 2.50023 226.912L4.11197 226.912C5.21654 226.913 6.11138 226.017 6.12182 224.912C6.56259 178.255 21.7678 132.934 49.5555 95.4515C50.2133 94.5642 50.04 93.3098 49.1586 92.644L47.8726 91.6724Z" fill="#FD2D21" fillOpacity="0.5"/>
      <path d="M253.898 4.11713C254.03 3.02052 253.248 2.02328 252.15 1.90063C214.499 -2.3062 176.381 2.99792 141.293 17.342C106.204 31.6861 75.287 54.603 51.3647 83.9811C50.6673 84.8376 50.8077 86.0971 51.6704 86.787L52.9291 87.7936C53.7918 88.4834 55.0499 88.3424 55.7475 87.4861C79.0728 58.8543 109.212 36.5189 143.416 22.5365C177.62 8.55403 214.775 3.37969 251.478 7.47218C252.576 7.59458 253.572 6.81388 253.705 5.71726L253.898 4.11713Z" fill="#FFCC00" fillOpacity="0.5"/>
      <path d="M434.813 141.352C435.833 140.928 436.317 139.757 435.884 138.74C420.82 103.373 396.997 72.4108 366.647 48.7811C336.297 25.1515 300.439 9.64678 262.457 3.71386C261.366 3.54339 260.349 4.29973 260.188 5.39253L259.954 6.98709C259.793 8.07989 260.549 9.0953 261.64 9.26601C298.663 15.0576 333.615 30.175 363.199 53.209C392.784 76.2431 416.01 106.422 430.702 140.894C431.135 141.91 432.305 142.394 433.325 141.97L434.813 141.352Z" fill="#198C35" fillOpacity="0.5"/>
      <path d="M452 227.5C453.105 227.5 454.001 226.604 453.991 225.5C453.755 198.726 448.773 172.206 439.277 147.172C438.886 146.139 437.725 145.63 436.696 146.03L435.194 146.615C434.165 147.016 433.657 148.175 434.048 149.208C443.291 173.593 448.143 199.423 448.379 225.5C448.389 226.604 449.284 227.5 450.388 227.5H452Z" fill="#0F4D1E" fillOpacity="0.5"/>
      <defs>
        <linearGradient id="paint0_linear_42_597" x1="227.251" y1="0.499939" x2="227.251" y2="226.786" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C2C2C2"/>
          <stop offset="1" stopColor="#737373"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
   <div className="speed-gauge-wrap">
        <div className="speed-gauge-rotate" style={{ rotate: `${rotation}deg`, transition: 'rotate 1s ease-out' }}>
          <svg width="100%" height="auto" viewBox="0 0 424 212" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradientRed" x1="424" y1="212" x2="0" y2="212" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FD1507"/>
                <stop offset="1" stopColor="#971B14"/>
              </linearGradient>
              <linearGradient id="gradientYellow" x1="424" y1="212" x2="0" y2="212" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E0B404"/>
                <stop offset="1" stopColor="#B0710A"/>
              </linearGradient>
              <linearGradient id="gradientGreen" x1="424" y1="212" x2="0" y2="212" gradientUnits="userSpaceOnUse">
                <stop stopColor="#198C35"/>
                <stop offset="1" stopColor="#1DA53F"/>
              </linearGradient>
              <linearGradient id="gradientDarkGreen" x1="424" y1="212" x2="0" y2="212" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0E521F"/>
                <stop offset="1" stopColor="#0B471B"/>
              </linearGradient>
            </defs>

            <path d="M420 212C422.209 212 424.004 210.208 423.962 207.999C422.929 153.221 400.72 100.907 361.907 62.0934C322.149 22.3357 268.226 4.24494e-06 212 0C155.774 -4.24494e-06 101.851 22.3356 62.0934 62.0933C23.2797 100.907 1.07051 153.221 0.037712 207.999C-0.00393253 210.208 1.79086 212 4 212H40.8282C43.0374 212 44.8232 210.209 44.876 208C45.9014 165.113 63.3849 124.198 93.7917 93.7917C125.143 62.4409 167.663 44.8282 212 44.8282C256.337 44.8282 298.858 62.4409 330.208 93.7917C352.04 115.624 367.21 142.873 374.409 172.379C379.646 193.841 397.08 212 419.172 212H420Z" fill={`url(#${getGradientId(score)})`} />
          </svg>
        </div>
      </div>
      <div className='speedomtetre-metrics-wrap f-col g12'>
        <p className='small-heading'>Score</p>
        <p className='card-label'>{score}</p>
        <p className='change-label'>+1.89 <span>From last month</span></p>
      </div>
    </div>
  );
};

export default SecurityScoreSpeedometre;
