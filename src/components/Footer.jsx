import { NavLink } from "react-router-dom";
import Logo from "../icon/Logo";

const Footer = () => {
  return (
    <div className="h-[560px] relative bg-[#1D293E] px-[350px] pt-[100px] text-white">
      <div className="grid grid-cols-7 gap-[100px]">
        <div className="col-span-2 flex flex-col gap-7 ">
          <span className="text-[18px]">Contact Us</span>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00186 3.87109C7.15925 3.87109 5.66016 5.37019 5.66016 7.2128C5.66016 9.05541 7.15925 10.5545 9.00186 10.5545C10.8445 10.5545 12.3436 9.05541 12.3436 7.2128C12.3436 5.37019 10.8445 3.87109 9.00186 3.87109ZM9.00186 9.14748C7.93508 9.14748 7.06718 8.27958 7.06718 7.2128C7.06718 6.14602 7.93508 5.27812 9.00186 5.27812C10.0686 5.27812 10.9365 6.14602 10.9365 7.2128C10.9365 8.27958 10.0686 9.14748 9.00186 9.14748Z"
                  fill="white"
                />
                <path
                  d="M9.00014 0C5.02393 0 1.78906 3.2349 1.78906 7.21107V7.41041C1.78906 9.42135 2.94198 11.7647 5.21588 14.3753C6.86429 16.2679 8.48967 17.5875 8.55801 17.6427L9.00014 18L9.44226 17.6428C9.51064 17.5875 11.136 16.2679 12.7844 14.3754C15.0583 11.7647 16.2112 9.42138 16.2112 7.41045V7.21111C16.2112 3.2349 12.9763 0 9.00014 0ZM14.8042 7.41045C14.8042 10.8088 10.4254 14.9226 9.00014 16.1715C7.57444 14.9222 3.19609 10.8086 3.19609 7.41045V7.21111C3.19609 4.01077 5.79979 1.40706 9.00014 1.40706C12.2005 1.40706 14.8042 4.01077 14.8042 7.21111V7.41045V7.41045Z"
                  fill="white"
                />
              </svg>
              <span className="text-[15px] font-light">
                45 Le Thanh Ton, phuong Ben Nghe, Quan 1, Ho Chi Minh city,
                Vietnam.
              </span>
            </div>
            <div className="flex gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9365 18C12.3555 18 11.7794 17.8973 11.216 17.6926C8.73416 16.791 6.43047 15.3226 4.5539 13.4461C2.67734 11.5696 1.20892 9.26582 0.307378 6.78396C0.0176675 5.98637 -0.067829 5.16305 0.0533496 4.33677C0.166865 3.5628 0.466665 2.81144 0.920373 2.16388C1.37608 1.51348 1.98363 0.972523 2.6773 0.599495C3.41703 0.201718 4.22443 0 5.07715 0C5.34236 0 5.57156 0.185301 5.62714 0.444603L6.51002 4.56471C6.54999 4.75128 6.49266 4.9454 6.35777 5.08033L4.84917 6.58889C6.27231 9.41836 8.58155 11.7276 11.411 13.1507L12.9196 11.6421C13.0545 11.5073 13.2487 11.45 13.4352 11.4899L17.5553 12.3728C17.8146 12.4283 17.9999 12.6576 17.9999 12.9228C17.9999 13.7755 17.7982 14.5829 17.4004 15.3226C17.0274 16.0163 16.4864 16.6239 15.836 17.0796C15.1885 17.5333 14.4371 17.8331 13.6631 17.9466C13.4206 17.9822 13.1781 18 12.9365 18ZM4.62773 1.14956C3.50295 1.27373 2.50462 1.86328 1.84167 2.80947C1.09618 3.87343 0.922341 5.18206 1.36473 6.3999C3.098 11.1713 6.82867 14.902 11.6001 16.6353C12.8179 17.0776 14.1265 16.9038 15.1905 16.1583C16.1367 15.4954 16.7263 14.497 16.8504 13.3723L13.4987 12.654L11.9232 14.2295C11.7556 14.3972 11.5008 14.4417 11.2863 14.3409C7.93994 12.7688 5.2312 10.06 3.65907 6.71365C3.55828 6.4991 3.60279 6.24437 3.77044 6.07675L5.34594 4.50126L4.62773 1.14956Z"
                  fill="white"
                />
              </svg>

              <span className="text-[15px] font-light">1234567890</span>
            </div>
            <div className="flex gap-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8906 2.39062H2.10938C0.946266 2.39062 0 3.33689 0 4.5V13.5C0 14.6631 0.946266 15.6094 2.10938 15.6094H15.8906C17.0537 15.6094 18 14.6631 18 13.5V4.5C18 3.33689 17.0537 2.39062 15.8906 2.39062ZM16.5938 13.5C16.5938 13.8877 16.2783 14.2031 15.8906 14.2031H2.10938C1.72167 14.2031 1.40625 13.8877 1.40625 13.5V4.5C1.40625 4.1123 1.72167 3.79688 2.10938 3.79688H15.8906C16.2783 3.79688 16.5938 4.1123 16.5938 4.5V13.5Z"
                  fill="white"
                />
                <path
                  d="M16.4755 3.26562L9.00118 8.82512L1.52682 3.26562L0.6875 4.39396L9.00118 10.5777L17.3149 4.39396L16.4755 3.26562Z"
                  fill="white"
                />
              </svg>

              <span className="text-[15px] font-light">support@skola.com</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-7">
          <span className="text-[18px]">Company</span>
          <div className="flex flex-col gap-4 text-[15px] font-light">
            <NavLink to={"/"}>Booking</NavLink>
            <NavLink to={"/"}>Aricles</NavLink>
            <NavLink to={"/"}>Contact Us</NavLink>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-7">
          <span className="text-[18px]">Discovery</span>
          <div className="grid grid-cols-5 gap-4 text-[15px] font-light">
            <div className="col-span-2 flex flex-col gap-4">
              <span>Ha Noi</span>
              <span>Ho Chi Minh</span>
              <span>Hue</span>
              <span>Da Nang</span>
              <span>Phu Quoc</span>
              <span>Nha Trang</span>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <span>Mui Ne</span>
              <span>Vung Tau</span>
              <span>Da Lat</span>
              <span>Tay Nguyen</span>
              <span>Quang Nam</span>
              <span>Nghe An</span>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <span>Dak Lak</span>
              <span>Lam Dong</span>
              <span>Hoi An</span>
              <span>Ha Long Bay</span>
              <span>Tam Coc</span>
              <span>Sapa</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[110px] flex items-center left-0 right-0 bg-transparent  bottom-0 border-t border-white border-opacity-10 px-[350px] justify-between ">
        <div>© Guido - All rights reserved</div>
        <div className="flex items-center">
          <Logo></Logo>
          <span className="text-[30px] font-medium leading-[43px]">
            Travel exprience
          </span>
        </div>
        <div className="flex items-center gap-7">
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53906 6.94922H4.78125V12.1992H2.4375V6.94922H0.515625V4.79297H2.4375V3.12891C2.4375 1.25391 3.5625 0.199219 5.27344 0.199219C6.09375 0.199219 6.96094 0.363281 6.96094 0.363281V2.21484H6C5.0625 2.21484 4.78125 2.77734 4.78125 3.38672V4.79297H6.86719L6.53906 6.94922Z"
              fill="white"
            />
          </svg>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7578 2.76172C10.7578 2.87891 10.7578 2.97266 10.7578 3.08984C10.7578 6.34766 8.29688 10.0742 3.77344 10.0742C2.36719 10.0742 1.07812 9.67578 0 8.97266C0.1875 8.99609 0.375 9.01953 0.585938 9.01953C1.73438 9.01953 2.78906 8.62109 3.63281 7.96484C2.55469 7.94141 1.64062 7.23828 1.33594 6.25391C1.5 6.27734 1.64062 6.30078 1.80469 6.30078C2.01562 6.30078 2.25 6.25391 2.4375 6.20703C1.3125 5.97266 0.46875 4.98828 0.46875 3.79297V3.76953C0.796875 3.95703 1.19531 4.05078 1.59375 4.07422C0.914062 3.62891 0.492188 2.87891 0.492188 2.03516C0.492188 1.56641 0.609375 1.14453 0.820312 0.792969C2.03906 2.26953 3.86719 3.25391 5.90625 3.37109C5.85938 3.18359 5.83594 2.99609 5.83594 2.80859C5.83594 1.44922 6.9375 0.347656 8.29688 0.347656C9 0.347656 9.63281 0.628906 10.1016 1.12109C10.6406 1.00391 11.1797 0.792969 11.6484 0.511719C11.4609 1.09766 11.0859 1.56641 10.5703 1.87109C11.0625 1.82422 11.5547 1.68359 11.9766 1.49609C11.6484 1.98828 11.2266 2.41016 10.7578 2.76172Z"
              fill="white"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 3.50391C7.72656 3.50391 8.94531 4.72266 8.94531 6.19922C8.94531 7.69922 7.72656 8.89453 6.25 8.89453C4.75 8.89453 3.55469 7.69922 3.55469 6.19922C3.55469 4.72266 4.75 3.50391 6.25 3.50391ZM6.25 7.95703C7.21094 7.95703 7.98438 7.18359 7.98438 6.19922C7.98438 5.23828 7.21094 4.46484 6.25 4.46484C5.26562 4.46484 4.49219 5.23828 4.49219 6.19922C4.49219 7.18359 5.28906 7.95703 6.25 7.95703ZM9.67188 3.41016C9.67188 3.76172 9.39062 4.04297 9.03906 4.04297C8.6875 4.04297 8.40625 3.76172 8.40625 3.41016C8.40625 3.05859 8.6875 2.77734 9.03906 2.77734C9.39062 2.77734 9.67188 3.05859 9.67188 3.41016ZM11.4531 4.04297C11.5 4.91016 11.5 7.51172 11.4531 8.37891C11.4062 9.22266 11.2188 9.94922 10.6094 10.582C10 11.1914 9.25 11.3789 8.40625 11.4258C7.53906 11.4727 4.9375 11.4727 4.07031 11.4258C3.22656 11.3789 2.5 11.1914 1.86719 10.582C1.25781 9.94922 1.07031 9.22266 1.02344 8.37891C0.976562 7.51172 0.976562 4.91016 1.02344 4.04297C1.07031 3.19922 1.25781 2.44922 1.86719 1.83984C2.5 1.23047 3.22656 1.04297 4.07031 0.996094C4.9375 0.949219 7.53906 0.949219 8.40625 0.996094C9.25 1.04297 10 1.23047 10.6094 1.83984C11.2188 2.44922 11.4062 3.19922 11.4531 4.04297ZM10.3281 9.29297C10.6094 8.61328 10.5391 6.97266 10.5391 6.19922C10.5391 5.44922 10.6094 3.80859 10.3281 3.10547C10.1406 2.66016 9.78906 2.28516 9.34375 2.12109C8.64062 1.83984 7 1.91016 6.25 1.91016C5.47656 1.91016 3.83594 1.83984 3.15625 2.12109C2.6875 2.30859 2.33594 2.66016 2.14844 3.10547C1.86719 3.80859 1.9375 5.44922 1.9375 6.19922C1.9375 6.97266 1.86719 8.61328 2.14844 9.29297C2.33594 9.76172 2.6875 10.1133 3.15625 10.3008C3.83594 10.582 5.47656 10.5117 6.25 10.5117C7 10.5117 8.64062 10.582 9.34375 10.3008C9.78906 10.1133 10.1641 9.76172 10.3281 9.29297Z"
              fill="white"
            />
          </svg>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.34375 10.6992H0.164062V3.69141H2.34375V10.6992ZM1.24219 2.75391C0.5625 2.75391 0 2.16797 0 1.46484C0 0.785156 0.5625 0.222656 1.24219 0.222656C1.94531 0.222656 2.50781 0.785156 2.50781 1.46484C2.50781 2.16797 1.94531 2.75391 1.24219 2.75391ZM10.4766 10.6992H8.32031V7.30078C8.32031 6.48047 8.29688 5.44922 7.17188 5.44922C6.04688 5.44922 5.88281 6.31641 5.88281 7.23047V10.6992H3.70312V3.69141H5.78906V4.65234H5.8125C6.11719 4.11328 6.82031 3.52734 7.875 3.52734C10.0781 3.52734 10.5 4.98047 10.5 6.85547V10.6992H10.4766Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
