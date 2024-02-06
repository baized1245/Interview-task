import React from 'react'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="w-full h-20 bg-orange-800 flex items-center justify-evenly">
      <div>
        <p className="text-white">
          @2024 <span className="underline"> Kavinax Property</span>. All Rigths
          Reverted
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center gap-2">
          <AiOutlineSafetyCertificate className="text-white" />
          <p className="text-white">Secure Payment</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-14 h-9 rounded-lg"
            src="https://img.freepik.com/premium-photo/woman-hands-holding-smartphone-with-paypal-apps-screen-paypal-is-online-electronic-payment-system_89286-194.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=sph"
            alt=""
          />
          <img
            className="w-14 h-9 rounded-lg"
            src="https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74366.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais"
            alt=""
          />
          <img
            className="w-14 h-9 rounded-lg"
            src="https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74365.jpg?size=626&ext=jpg&uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
